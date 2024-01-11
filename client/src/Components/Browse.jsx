import React from "react";
import useNowPlaying from "../Custom Hooks/useNowPlaying";
import "../index.css";
import HeroPlayingMovies from "./HeroPlayingMovies";
import MovieList from "./MovieList";
import usePopularMovie from "../Custom Hooks/usePopularMovie";
import useTopRatedMovies from "../Custom Hooks/useTopRatedMovies";
import useUpcomingMovies from "../Custom Hooks/useUpcomingMovies";

const Browse = () => {
  // fetching the Now Playing Movies
  useNowPlaying();
  usePopularMovie();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div id="browse">
      <HeroPlayingMovies />
      <MovieList />
    </div>
  );
};

export default Browse;
