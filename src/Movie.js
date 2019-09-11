import React, { Component } from "react";
import "./Movie.css";

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>hello this is a movice</h1>
      </div>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return <img src="http://img.movist.com/?img=/x00/04/84/38_p1.jpg" />;
  }
}
export default Movie;
