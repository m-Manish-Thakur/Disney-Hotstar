import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const NowPlayingMovies = () => {
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  console.log(nowPlayingMovies);
  return (
    <div id="nowPlaying">
      <h2 className="text-3xl font-bold text-gray-200">Trending Movies</h2>
      {nowPlayingMovies ? (
        <div className="flex flex-wrap justify-around">
          {nowPlayingMovies.map((item) => (
            <MovieCard movie={item} />
          ))}
        </div>
      ) : (
        <h2 className="text-3xl font-bold text-gray-200">Trending Movies</h2>
      )}
    </div>
  );
};

export default NowPlayingMovies;
