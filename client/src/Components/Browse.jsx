import React from "react";
import useNowPlaying from "../Custom Hooks/useNowPlaying";
import "../index.css";
import { useSelector } from "react-redux";
import HeroPlayingMovies from "./HeroPlayingMovies";
import NowPlayingMovies from "./NowPlayingMovies";

const Browse = () => {
  // fetching the Now Playing Movies
  useNowPlaying();

  const { nowPlayingMovies } = useSelector((store) => store.movies);

  return (
    <div id="browse">
      <HeroPlayingMovies />
      <NowPlayingMovies />
    </div>
  );
};

export default Browse;
