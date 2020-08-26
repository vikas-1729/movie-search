import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  CHANGE_TAB,
} from "../actions/index";
let intialMoviesState = {
  list: [],
  favourites: [],
  tabMovies: true,
};
export function movies(state = intialMoviesState, action) {
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_FAVOURITES:
      return {
        ...state,
        favourites: [action.favouriteMovie, ...state.favourites],
      };
    case REMOVE_FAVOURITES:
      let newState = { ...state };
      let newFavourite = state.favourites.filter(function (favMovie) {
        return favMovie !== action.removeFavourite;
      });
      newState.favourites = newFavourite;
      return newState;
    case CHANGE_TAB:
      return {
        ...state,
        tabMovies: action.value,
      };
    default:
      return {
        ...state,
      };
  }
}

let initialSearchState = {};

export function search(state = initialSearchState, action) {
  return state;
}
// let initialState = {
//   movies: intialMoviesState,
//   search: initialSearchState,
// };
// export default function rootReducer(state = initialState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }
export default combineReducers({
  // this use to provide by redux
  movies: movies,
  search: search,
});
