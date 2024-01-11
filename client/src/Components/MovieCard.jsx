import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { IMG_CDN_URL } from "../Constants/constants";

const MovieCard = (movie) => {
  const [hoverCard, setHoverCard] = useState(false);

  // Check if poster_path is available
  const hasPoster = movie.movie.poster_path;

  return hasPoster ? (
    <div className="" onMouseOver={() => setHoverCard(true)} onMouseLeave={() => setHoverCard(false)}>
      <div id="movieCard">
        <Link to={`/movie/${movie.movie.id}`}>
          <div
            className="poster"
            style={{
              backgroundImage: `url('${IMG_CDN_URL}/${movie.movie.poster_path}')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            {
              <div className="cardContent">
                <button className="py-2 px-4 rounded-md bg-gray-600/[.7] text-white text-xs tracking-wider font-semibold">
                  <i className="fa-solid fa-play mr-1"></i> Watch Now
                </button>
                <button className="px-3 py-2 ml-2 rounded-md bg-gray-600/[.7] text-white text-xs tracking-wider font-semibold">
                  <i className="fa-solid fa-plus"></i>
                </button>
                <div className="mt-2 flex items-center gap-1">
                  <p className="text-xs/5 font-semibold text-white">Rating:</p>
                  <div className="py-0 px-2 bg-gray-700 flex items-center gap-1 rounded-md">
                    <i class="fa-solid fa-star text-white text-xs"></i>
                    <p className="text-xs/5  text-white">{movie.movie.vote_average}</p>
                  </div>
                </div>
                <p className="text-xs/3 mt-2 font-semibold text-gray-400" style={{ fontSize: "10px" }}>
                  {movie.movie.overview.substring(0, 120)}
                </p>
              </div>
            }
          </div>
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
};

export default MovieCard;
