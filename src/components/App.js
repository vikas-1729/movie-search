import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, actionChangeTab } from "../actions/index";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      console.log("okk i am updating");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
  }
  changeTab = (value) => {
    const { store } = this.props;
    store.dispatch(actionChangeTab(value));
  };
  isFavourite = (movie) => {
    const { movies } = this.props.store.getState();
    let index = movies.favourites.indexOf(movie);
    if (index === -1) {
      return false;
    }
    return true;
  };
  render() {
    const { movies } = this.props.store.getState(); // our state {movies,search}
    const { list, favourites, tabMovies } = movies;
    const displayMovies = tabMovies === true ? list : favourites;
    return (
      <div className="App">
        <Navbar store={this.props.store} />
        <div className="main">
          <div className="tabs">
            <div
              className={tabMovies === true ? "active-tabs" : "tab"}
              onClick={() => {
                this.changeTab(true);
              }}
            >
              MOVIES
            </div>
            <div
              className={tabMovies === false ? "active-tabs" : "tab"}
              onClick={() => {
                this.changeTab(false);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  store={this.props.store}
                  movie={movie}
                  isFavourite={this.isFavourite(movie)}
                  key={`movie${index}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
