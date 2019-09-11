import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

const movies = [
  {
    title: "Harry Potter",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/thumb/d/dd/%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%A7%88%EB%B2%95%EC%82%AC%EC%9D%98_%EB%8F%8C_%EC%98%81%ED%99%94.jpg/250px-%ED%95%B4%EB%A6%AC_%ED%8F%AC%ED%84%B0%EC%99%80_%EB%A7%88%EB%B2%95%EC%82%AC%EC%9D%98_%EB%8F%8C_%EC%98%81%ED%99%94.jpg"
  },
  {
    title: "Inception",
    poster:
      "https://upload.wikimedia.org/wikipedia/ko/thumb/1/1d/%EC%9D%B8%EC%85%89%EC%85%98.jpg/250px-%EC%9D%B8%EC%85%89%EC%85%98.jpg"
  },
  {
    title: "LittleForest",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Little_Forest_%28%EB%A6%AC%ED%8B%80_%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%29.jpg/220px-Little_Forest_%28%EB%A6%AC%ED%8B%80_%ED%8F%AC%EB%A0%88%EC%8A%A4%ED%8A%B8%29.jpg"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return (
            <Movie title={movie.title} poster={movie.poster} key={index} />
          );
        })}
      </div>
    );
  }
}

export default App;
