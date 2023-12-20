import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../Constants/constants";
import MovieCard from "./MovieCard";
import "../index.css";

const TvShows = () => {
  const [tvShows, setTvShows] = useState(null);
  useEffect(() => {
    const fetchTvShows = async () => {
      const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?language=en-US`, API_OPTIONS);
      const data = await response.json();
      console.log(data);
      setTvShows(data.results);
    };
    fetchTvShows();
  }, []);
  return (
    <div id="tvShows">
      <h1 className="text-2xl text-white tracking-wide">Popular TV Shows</h1>
      <div className="container">
        {tvShows ? (
          tvShows.map((item) => <MovieCard movie={item} />)
        ) : (
          <>
            <h1>Loading</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default TvShows;
