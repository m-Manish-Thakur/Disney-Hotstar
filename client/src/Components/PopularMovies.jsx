import React, { useState } from "react";
import "../index.css";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const PopularMovies = () => {
  const { popularMovies } = useSelector((store) => store.movies);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    const cardWidth = 200; // Adjust based on your card size
    const maxScroll = (popularMovies.length - 4) * cardWidth; // Show 5 cards at a time

    if (direction === "left" && scrollPosition > 0) {
      setScrollPosition(scrollPosition - cardWidth);
    } else if (direction === "right" && scrollPosition < maxScroll) {
      setScrollPosition(scrollPosition + cardWidth);
    }
  };
  return (
    <>
      <div className="movie-scroller">
        <h2 className="text-3xl font-bold text-gray-200 mb-1">Popular Movies</h2>
        <div id="container">
          <div className="scroll-container" style={{ transform: `translateX(-${scrollPosition}px)` }}>
            {popularMovies.map((item) => (
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

export default PopularMovies;
