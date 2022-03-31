import React from "react";

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <main>
      <div className="main_border">
        <img className="main_img" src={`./assets/${poster} `} alt={title} />
        <div className="main_box">
          <h3>{title} </h3>
          <p className="main_rating">{rating}/10 </p>
          <p className="main_year">Rok vydání: {year} </p>
          <p className="main_genre">Žánr: {genre} </p>
          <p className="main_director">Režie: {director} </p>
          <p className="main_cast">V hlavních rolích: {cast}</p>
        </div>
      </div>
    </main>
  );
};

export default Movie;
