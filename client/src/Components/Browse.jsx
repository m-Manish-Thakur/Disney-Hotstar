import React from "react";
import useNowPlaying from "../Custom Hooks/useNowPlaying";
import "../index.css";
import HeroPlayingMovies from "./HeroPlayingMovies";
import MovieList from "./MovieList";
import usePopularMovie from "../Custom Hooks/usePopularMovie";

const Browse = () => {
  // fetching the Now Playing Movies
  useNowPlaying();
  usePopularMovie();

  return (
    <div id="browse">
      <HeroPlayingMovies />
      <MovieList />
    </div>
  );
};

export default Browse;
