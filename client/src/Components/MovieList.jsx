import React from "react";
import NowPlayingMovies from "./NowPlayingMovies";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";

const MovieList = () => {
  return (
    <div
      style={{
        background: "rgb(15, 16, 20)",
        paddingTop: "50px",
      }}
    >
      <NowPlayingMovies />
      <PopularMovies />
      <TopRatedMovies />
    </div>
  );
};

export default MovieList;
