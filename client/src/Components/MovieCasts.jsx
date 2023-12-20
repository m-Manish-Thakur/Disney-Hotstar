import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../Constants/constants";

const MovieCasts = ({ movieId }) => {
  const [casts, setCasts] = useState(null);
  useEffect(() => {
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
    fetchCasts();
  }, [movieId]);
  return (
    <div id="casts">
      <h1 className="text-2xl font-semibold text-white  tracking-wide">Cast</h1>

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
  );
};

export default MovieCasts;
