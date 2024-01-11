import React, { useState } from "react";
import "../index.css";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import lang from "../Constants/language";

const NowPlayingMovies = () => {
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    <>
      <div className="movie-scroller">
        <h2 className="text-xl font-bold text-gray-200 mb-1 tracking-wide">{lang[langKey].trending}</h2>
        <div id="container">
          {nowPlayingMovies.map((item) => (
            <MovieCard movie={item} key={item?.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NowPlayingMovies;
