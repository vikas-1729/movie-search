import {
  ADD_MOVIES,
  ADD_FAVOURITES,
  REMOVE_FAVOURITES,
} from "../actions/index";
export default function (state = { movies: [], favourites: [] }, action) {
  // let newState = { ...state };
  // if (action.type === ADD_MOVIES) {
  //   newState.movies = action.movies;
  //   return newState;
  // }
  // if (action.type === ADD_FAVOURITES) {
  //   console.log("inside reducer");
  //   newState.favourites.push(action.favouriteMovie);
  //   return newState;
  // }
  // if (action.type === REMOVE_FAVOURITES) {
  //   let newFavourite = state.favourites.filter(function (favMovie) {
  //     return favMovie !== action.removeFavourite;
  //   });
  //   newState.favourites = newFavourite;
  //   return newState;
  // }
  // return newState;
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        movies: action.movies,
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

    default:
      return {
        ...state,
      };
  }
}
