import React from "react";
import { handleSearchAction, addSearchTolist } from "../actions/index";
class Navbar extends React.Component {
  addMovieToList = (movie) => {
    const { store } = this.props;
    store.dispatch(addSearchTolist(movie));
  };
  handleSearch = () => {
    const { store } = this.props;
    let e = document.getElementById("search-text");
    console.log("1");
    store.dispatch(handleSearchAction(e.value));
  };
  render() {
    const { search } = this.props.store.getState();
    const { result: movie, searchResult } = search;
    return (
      <div className="nav">
        <div className="search-container">
          <input id="search-text" />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>

          {searchResult && (
            <div className="search-results">
              <div className="search-result">
                <img alt="movie-pic" src={movie.Poster} />

                <div className="movie-info">
                  <span className="title">{movie.Title}</span>
                  <button
                    className="favourite-btn"
                    onClick={() => {
                      this.addMovieToList(movie);
                    }}
                  >
                    ADD TO LIST
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Navbar;
