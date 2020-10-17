import React from "react";
import { handleSearchAction, addSearchTolist } from "../actions/index";
import { connect } from "react-redux";
class Navbar extends React.Component {
  addMovieToList = (movie) => {
    const { dispatch } = this.props;
    dispatch(addSearchTolist(movie));
  };
  handleSearch = () => {
    const { dispatch } = this.props;
    let e = document.getElementById("search-text");
    console.log("1");
    dispatch(handleSearchAction(e.value));
  };
  render() {
    const { search } = this.props;
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

// class NavbarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <Navbar store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
function MapToState(state) {
  return {
    search: state.search,
  };
}
const connectedNavBarComponent = connect(MapToState)(Navbar);
export default connectedNavBarComponent;
