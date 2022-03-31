import React from "react";
import { render } from "react-dom";
import "./style.css";
import "./components/Movie/style.css";
import Header from "./components/Header/header";
import Movie from "./components/Movie/movie";
import "./components/Header/style.css";

const movies = [
  {
    id: 1,
    title: "Pulp Fiction",
    poster: "pulp-fiction.jpg",
    year: 1994,
    rating: 8.9,
    director: "Quentin Tarantino",
    genre: "crime, drama",
    cast: "John Travolta",
  },
  {
    id: 2,
    title: "1917",
    poster: "1917.jpg",
    year: 2019,
    rating: 8.3,
    director: "Sam Mendes",
    genre: "action, drama, war",
    cast: "Dean-Charles Chapman",
  },
  {
    id: 3,
    title: "La La Land",
    poster: "la-la-land.jpg",
    year: 2016,
    rating: 8.0,
    director: "Damien Chazelle",
    genre: "comedy, drama, music",
    cast: "Ryan Gosling",
  },
  {
    id: 4,
    title: "Inception",
    poster: "inception.jpg",
    year: 2010,
    rating: 8.8,
    director: "Christopher Nolan",
    genre: "action, adventure, sci-fi",
    cast: "Leonardo DiCaprio",
  },
  {
    id: 5,
    title: "Guardians of the Galaxy",
    poster: "guardians-of-the-galaxy.jpg",
    year: 2014,
    rating: 8.0,
    director: "James Gunn",
    genre: "action, adventure, comedy",
    cast: "Chris Pratt",
  },
  {
    id: 6,
    title: "The Lion King",
    poster: "lion-king.jpg",
    year: 1994,
    rating: 8.5,
    director: "Roger Allers, Rob Minkoff",
    genre: "animation, adventure, drama",
    cast: "Matthew Broderick",
  },
  {
    id: 7,
    title: "The Aviator",
    poster: "aviator.jpg",
    year: 2004,
    rating: 7.5,
    director: "Martin Scorsese",
    genre: "biography, drama",
    cast: "Leonardo DiCaprio",
  },
  {
    id: 8,
    title: "2001: A Space Odyssey",
    poster: "2001.jpg",
    year: 1968,
    rating: 8.3,
    director: "Stanley Kubrick",
    genre: "adventure, sci-fi",
    cast: "Keir Dullea",
  },
  {
    id: 9,
    title: "Parasite",
    poster: "parasite.jpg",
    year: 2019,
    rating: 8.6,
    director: "Bong Joon Ho",
    genre: "comedy, drama, thriller",
    cast: "Kang-ho Song",
  },
  {
    id: 10,
    title: "Gravity",
    poster: "gravity.jpg",
    year: 2013,
    rating: 7.7,
    director: "Alfonso Cuarón",
    genre: "adventure, drama, sci-fi",
    cast: "Sandra Bullock",
  },
];

const App = () => (
  <>
    <Header />
    <div className="movie_grid">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          poster={movie.poster}
          rating={movie.rating}
          year={movie.year}
          genre={movie.genre}
          director={movie.director}
          cast={movie.cast}
        />
      ))}
    </div>
  </>
);

render(<App />, document.querySelector("#app"));
