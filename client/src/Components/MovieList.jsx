import React from "react";
import NowPlayingMovies from "./NowPlayingMovies";
import PopularMovies from "./PopularMovies";

const MovieList = () => {
  return (
    <div>
      <NowPlayingMovies />
      <PopularMovies />
    </div>
  );
};

export default MovieList;
