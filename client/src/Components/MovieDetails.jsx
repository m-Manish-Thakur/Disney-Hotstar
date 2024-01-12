import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../index.css";
import BackgroundVideoTrailer from "./BackgroundVideoTrailer";
import { API_OPTIONS, SERVER_URL } from "../Constants/constants";
import RelatedMovies from "./RelatedMovies";
import MovieCasts from "./MovieCasts";
import Footer from "./Footer";
import axios from "axios";
import { toast } from "react-toastify";

const MovieDetails = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const { user } = useSelector((store) => store.user);
  const [movieDetail, setMovieDetails] = useState(null);

  // console.log(user._id);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchMovieDetails();
    // Scroll to the top when new data is fetched
    window.scrollTo(0, 0);
  }, [movieId]);

  const AddMovieToWatchList = async () => {
    try {
      // Make a POST request to add a movie to the watchlist
      await axios.post(`${SERVER_URL}/api/watchlist`, {
        userId: user?._id,
        movieId: movieId,
        movieImg: movieDetail?.poster_path,
      });
      toast.success("Movie Added");
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    }
  };

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
            <button
              className="mt-8 w-80 py-3 rounded-md bg-gray-200/[.7] text-black text-lg tracking-wider font-semibold hover:bg-gray-500/[.8] first"
              onClick={() => AddMovieToWatchList()}
            >
              <i className="fa-solid fa-plus mr-2"></i> Add to Watchlist
            </button>
            <button className="mt-8 px-5 py-3 ml-5 rounded-md bg-gray-600/[.7] text-white text-lg tracking-wider font-semibold hover:bg-gray-500/[.8]">
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
          <MovieCasts movieId={movieId} />
          <RelatedMovies id={movieDetail?.id} />
          <Footer />
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
