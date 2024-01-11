import React from "react";
import "../index.css";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import lang from "../Constants/language";

const UpComingMovies = () => {
  const { upComingMovies } = useSelector((store) => store.movies);
  const langKey = useSelector((store) => store.config.lang);

  return (
    <>
      <div className="movie-scroller">
        <h2 className="text-xl font-bold text-gray-200 mb-1 tracking-wide">{lang[langKey].upComing}</h2>
        <div id="container">
          {upComingMovies.map((item) => (
            <MovieCard movie={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default UpComingMovies;
