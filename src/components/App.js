import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies } from "../actions/index";
class App extends React.Component {
  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      console.log("updated");
      this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    console.log("check state", store.getState());
  }
  render() {
    const movies = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">MOVIES</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {movies.map((movie, index) => {
              return <MovieCard movie={movie} key={`movie${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
