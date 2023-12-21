import React, { useState } from "react";
import "../index.css";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import lang from "../Constants/language";

const TopRatedMovies = () => {
  const { topRatedMovies } = useSelector((store) => store.movies);
  const [scrollPosition, setScrollPosition] = useState(0);
  const langKey = useSelector((store) => store.config.lang);

  const handleScroll = (direction) => {
    const cardWidth = 200; // Adjust based on your card size
    const maxScroll = (topRatedMovies.length - 4) * cardWidth; // Show 5 cards at a time

    if (direction === "left" && scrollPosition > 0) {
      setScrollPosition(scrollPosition - cardWidth);
    } else if (direction === "right" && scrollPosition < maxScroll) {
      setScrollPosition(scrollPosition + cardWidth);
    }
  };
  return (
    <>
      <div className="movie-scroller">
        <h2 className="text-xl font-bold text-gray-200 mb-1  tracking-wide">{lang[langKey].topRated}</h2>
        <div id="container">
          <div className="scroll-container" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {topRatedMovies.map((item) => (
              <MovieCard movie={item} />
            ))}
          </div>
        </div>
        <button id="button" className="bg-white text-black p-2 text-center" onClick={() => handleScroll("left")}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button id="button" className="bg-white text-black p-2 text-center" onClick={() => handleScroll("right")}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
};

export default TopRatedMovies;
