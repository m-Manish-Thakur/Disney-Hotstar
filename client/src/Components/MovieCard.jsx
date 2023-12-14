import React from "react";
import "../index.css";

const MovieCard = (movie) => {
  return (
    <div id="movieCard">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`} alt="" />
    </div>
  );
};

export default MovieCard;
