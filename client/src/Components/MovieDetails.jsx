import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import BackgroundVideoTrailer from "./BackgroundVideoTrailer";
import { API_OPTIONS } from "../Constants/constants";
import RelatedMovies from "./RelatedMovies";
import MovieCasts from "./MovieCasts";

const MovieDetails = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const [movieDetail, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS);
        const data = await response.json();
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  return movieDetail ? (
    <>
      <div id="movieDetails">
        <BackgroundVideoTrailer id={movieDetail?.id} />
        <div id="pageContent">
          <div className="content">
            <h4 className="mt-4 font-semibold py-1 px-3 bg-gray-600/[.7] rounded-sm inline-block text-lg tracking-wide">
              Rating: {movieDetail?.vote_average}
            </h4>
            <p className="mt-4 text-base text-gray-200 tracking-wider">{movieDetail.overview.substring(0, 180)}...</p>
            <h5 className="mt-6 font-semibold text-lg">{movieDetail.genres.map((genre) => genre.name).join(" | ")}</h5>
            <button className="mt-8 w-80 py-3 rounded-md bg-gray-200/[.7] text-black text-lg tracking-wider font-semibold hover:bg-gray-500/[.8]">
              <i className="fa-solid fa-play mr-2"></i> Watch Now
            </button>
            <button className="mt-8 px-5 py-3 ml-5 rounded-md bg-gray-600/[.7] text-white text-lg tracking-wider font-semibold hover:bg-gray-500/[.8]">
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>
          <MovieCasts movieId={movieId} />
          <RelatedMovies id={movieDetail?.id} />
        </div>
      </div>
    </>
  ) : (
    <div className="w-full height-full flex justify-center items-center" style={{ height: "100vh" }}>
      <img src="https://eapdea.gov.in/jocv/assets/img/processingN.gif" className="h-20" alt="Loading Img" />
    </div>
  );
};

export default MovieDetails;
