import React from "react";
import NowPlayingMovies from "./NowPlayingMovies";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";

const MovieList = () => {
  return (
    <div
      style={{
        paddingTop: "100px",
        background: "linear-gradient(to top, rgb(15, 16, 20) 90%, transparent)",
        transform: "translatey(-110px)",
      }}
    >
      <NowPlayingMovies />
      <PopularMovies />
      <TopRatedMovies />
    </div>
  );
};

export default MovieList;
