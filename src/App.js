import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movieTitle = ["Harry Poter", "Inception", "LittleForest"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitle[0]} />
        <Movie title={movieTitle[1]} />
        <Movie title={movieTitle[2]} />
      </div>
    );
  }
}

export default App;
