import React from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import { useSelector } from "react-redux";
import BackgroundVideoTrailer from "./BackgroundVideoTrailer";

const MovieDetails = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  const movieData = nowPlayingMovies.filter((movie) => movie.id == movieId);

  console.log(movieData[0]);
  {
    /* <div className="w-full height-full flex justify-center items-center">
<img src="https://eapdea.gov.in/jocv/assets/img/processingN.gif" className="h-20" alt="Loading Img" />
</div> */
  }

  return (
    <div id="movieDetails">
      <BackgroundVideoTrailer id={movieData[0]?.id} />
      <div className="content">
        <h1>{movieData[0]?.original_title.substring(0, 15)}</h1>
        <h4 className="mt-4 font-bold text-lg tracking-wide">2023 • 1 Season • 7 Languages</h4>
        <p className="mt-4 text-base font-semibold text-gray-200 traking-wider">
          {movieData[0].overview.substring(0, 200)}...
        </p>
        <h5 className="mt-6 font-semibold text-lg">Action | Trailer</h5>
        <button className="mt-8 w-80 py-3 rounded-md bg-gray-600/[.7] text-white text-lg tracking-wider font-semibold">
          <i className="fa-solid fa-play mr-2"></i> Watch Now
        </button>
        <button className="mt-8 px-5 py-3 ml-5 rounded-md bg-gray-600/[.7] text-white text-lg tracking-wider font-semibold">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
