import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions/index";
class App extends React.Component {
  constructor() {
    super();
    // we can also add it to store direct and dispatch action
    this.state = {
      tabMovies: true,
      tabFavorites: false,
    };
  }
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("check state", store.getState());
  }
  moviesTab = () => {
    this.setState({
      tabMovies: true,
    });
  };
  favouritesTab = () => {
    this.setState({
      tabMovies: false,
    });
  };
  isFavourite = (movie) => {
    const { favourites } = this.props.store.getState();
    let index = favourites.indexOf(movie);
    if (index === -1) {
      return false;
    }
    return true;
  };
  render() {
    const { tabMovies } = this.state;
    const { movies, favourites } = this.props.store.getState();
    const displayMovies = tabMovies === true ? movies : favourites;
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className={tabMovies === true ? "active-tabs" : "tab"}
              onClick={this.moviesTab}
            >
              MOVIES
            </div>
            <div
              className={tabMovies === false ? "active-tabs" : "tab"}
              onClick={this.favouritesTab}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => {
              return (
                <MovieCard
                  tab="movie"
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
