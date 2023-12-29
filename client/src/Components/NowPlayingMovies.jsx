import React, { useState } from "react";
import "../index.css";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import lang from "../Constants/language";

const NowPlayingMovies = () => {
  const { nowPlayingMovies } = useSelector((store) => store.movies);
  const [scrollPosition, setScrollPosition] = useState(0);
  const langKey = useSelector((store) => store.config.lang);

  const handleScroll = (direction) => {
    const cardWidth = 200; // Adjust based on your card size
    const maxScroll = (nowPlayingMovies.length - 4) * cardWidth; // Show 5 cards at a time

    if (direction === "left" && scrollPosition > 0) {
      setScrollPosition(scrollPosition - cardWidth);
    } else if (direction === "right" && scrollPosition < maxScroll) {
      setScrollPosition(scrollPosition + cardWidth);
    }
  };
  return (
    <>
      <div className="movie-scroller">
        <h2 className="text-xl font-bold text-gray-200 mb-1 tracking-wide">{lang[langKey].trending}</h2>
        <div id="container">
          {nowPlayingMovies.map((item) => (
            <MovieCard movie={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NowPlayingMovies;
