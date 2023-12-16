import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";
import BackgroundVideoTrailer from "./BackgroundVideoTrailer";
import useNowPlaying from "../Custom Hooks/useNowPlaying";
const MovieDetails = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  // fetching the Now Playing Movies
  useNowPlaying();
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  console.log(nowPlayingMovies);

  const movieData =
    nowPlayingMovies && Array.isArray(nowPlayingMovies) ? nowPlayingMovies.filter((movie) => movie.id === movieId) : [];
  console.log(movieData);

  return movieData[0] != null ? (
    <div id="movieDetails">
      <BackgroundVideoTrailer id={movieData[0]?.id} />
      <div className="content">
        <h1>{movieData[0]?.original_title.substring(0, 15)}...</h1>
        <h4 className="mt-4 font-semibold py-1 px-3 bg-gray-600/[.7] rounded-sm inline-block text-lg tracking-wide">
          Rating: {movieData[0]?.vote_average}
        </h4>
        <p className="mt-4 text-base font-semibold text-gray-200 tracking-wider">
          {movieData[0]?.overview.substring(0, 200)}...
        </p>
        <h5 className="mt-6 font-semibold text-lg">Action | Trailer</h5>
        <button className="mt-8 w-80 py-3 rounded-md bg-gray-200/[.7] text-black text-lg tracking-wider font-semibold hover:bg-gray-500/[.8]">
          <i className="fa-solid fa-play mr-2"></i> Watch Now
        </button>
        <button className="mt-8 px-5 py-3 ml-5 rounded-md bg-gray-600/[.7] text-white text-lg tracking-wider font-semibold hover:bg-gray-500/[.8]">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default MovieDetails;
