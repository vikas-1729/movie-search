import React from "react";

import { addToFavourite, removeFromFavourite } from "../actions/index";
class MovieCard extends React.Component {
  btnClicked = (isFavourite, movie) => {
    const { dispatch } = this.props;
    if (isFavourite === false) {
      dispatch(addToFavourite(movie));
    } else {
      dispatch(removeFromFavourite(movie));
    }
  };
  render() {
    const { movie, isFavourite } = this.props;
    let btnValue = "ADD TO FAVOURITES";
    if (isFavourite) {
      btnValue = "UNFAVOURITES";
    }
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-pic" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imbdRating}</div>
            <button
              className={isFavourite ? "unfavourite-btn" : "favourite-btn"}
              onClick={() => {
                this.btnClicked(isFavourite, movie);
              }}
            >
              {btnValue}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieCard;
