// here we define action type and action creator i.e the action which return;

export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITES = "ADD_FAVOURITES";
export const REMOVE_FAVOURITES = "REMOVE_FAVOURITES";
export const CHANGE_TAB = "CHANGE_TAB";
export const SHOW_SEARCH = "SHOW_SEARCH";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_SEARCH_TO_LIST = "ADD_SEARCH_TO_LIST";
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
export function handleSearchAction(text) {
  // return async function (dispatch) {
  //   let c = await fetch(`http://www.omdbapi.com/?apikey=87a61b7&t=${text}`);
  //   let data = await c.json();
  //   console.log(data);
  //   dispatch(addSearchResult(data));
  // };
  return function (dispatch) {
    const url = `http://www.omdbapi.com/?apikey=87a61b7&t=${text}`;
    fetch(url).then((response) =>
      response.json().then((data) => {
        console.log("data", data);
        if (data.Response !== "False") {
          dispatch(addSearchResult(data));
        }
      })
    );
  };
}
export function addSearchResult(data) {
  return {
    type: ADD_SEARCH_RESULT,
    movie: data,
  };
}

export function addSearchTolist(movie) {
  return {
    type: ADD_SEARCH_TO_LIST,
    movie,
  };
}
