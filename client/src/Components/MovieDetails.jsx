import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../index.css";
import BackgroundVideoTrailer from "./BackgroundVideoTrailer";
import { API_OPTIONS } from "../Constants/constants";

const MovieDetails = () => {
  const { id } = useParams();
  const movieId = parseInt(id, 10);
  const [movieDetail, setMovieDetails] = useState(null);
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, API_OPTIONS);
        const data = await response.json();
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    const fetchCasts = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          API_OPTIONS
        );
        const data = await response.json();
        console.log(data);
        setCasts(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchData();
    fetchCasts();
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
          <div id="casts">
            <h1 className="text-2xl font-semibold text-white">Cast</h1>

            <div className="container">
              {casts ? (
                casts.cast.map((cast) => (
                  <>
                    <div>
                      <img
                        src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                        alt="actor"
                        style={{ minWidth: "150px", borderRadius: "10px" }}
                      />
                      <p className="text-gray-300 text-center mt-3">{cast.name}</p>
                      <p className="text-gray-500 text-sm text-center">{cast.character}</p>
                    </div>
                  </>
                ))
              ) : (
                <h1 className="text-2xl font-semibold text-white">Cast</h1>
              )}
            </div>
          </div>
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
