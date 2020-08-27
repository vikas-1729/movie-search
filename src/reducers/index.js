import { combineReducers } from "redux";

import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
  CHANGE_TAB,
  ADD_SEARCH_RESULT,
  ADD_SEARCH_TO_LIST,
} from "../actions/index";
let intialMoviesState = {
  list: [],
  favourites: [],
  tabMovies: true,
};
export function movies(state = intialMoviesState, action) {
  console.log("action");
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
    case ADD_SEARCH_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };

    default:
      return {
        ...state,
      };
  }
}

let initialSearchState = {
  result: {},
  showResult: false,
};

export function search(state = initialSearchState, action) {
  console.log("succes");
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        searchResult: true,
      };
    case ADD_SEARCH_TO_LIST:
      return {
        ...state,
        searchResult: false,
      };

    default:
      return {
        ...state,
      };
  }
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
