import React, { useState } from "react";
import "../index.css";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import lang from "../Constants/language";

const TopRatedMovies = () => {
  const { topRatedMovies } = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    <>
      <div className="movie-scroller">
        <h2 className="text-xl font-bold text-gray-200 mb-1 tracking-wide">{lang[langKey].topRated}</h2>
        <div id="container">
          {topRatedMovies.map((item) => (
            <MovieCard movie={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopRatedMovies;
