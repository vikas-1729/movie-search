// here we define action type and action creator i.e the action which return;

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const CHANGE_TAB = "CHANGE_TAB";
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
export function addToFavourite(movie) {
  return {
    type: ADD_FAVOURITES,
    favouriteMovie: movie,
  };
}

export function removeFromFavourite(movie) {
  return {
    type: REMOVE_FAVOURITES,
    removeFavourite: movie,
  };
}
export function actionChangeTab(value) {
  return {
    type: CHANGE_TAB,
    value,
  };
}
