import React from "react";
import useNowPlaying from "../Custom Hooks/useNowPlaying";
import "../index.css";
import HeroPlayingMovies from "./HeroPlayingMovies";
import MovieList from "./MovieList";
import usePopularMovie from "../Custom Hooks/usePopularMovie";
import useTopRatedMovies from "../Custom Hooks/useTopRatedMovies";

const Browse = () => {
  // fetching the Now Playing Movies
  useNowPlaying();
  usePopularMovie();
  useTopRatedMovies();

  return (
    <div id="browse">
      <HeroPlayingMovies />
      <MovieList />
    </div>
  );
};

export default Browse;
