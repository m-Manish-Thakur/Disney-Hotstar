import React from "react";
import "../index.css";

const HeroPlayingMovies = () => {
  return (
    <div id="heroMovie">
      <video autoPlay muted loop>
        <source src="Images\heroMovie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="content">
        <h2 className="font-white text-6xl font-bold">Commando</h2>
        <h4 className="mt-4 font-bold text-lg tracking-wide">2023 • 1 Season • 7 Languages</h4>
        <p className="mt-4 text-gray-200 traking-wide">
          India is in danger. And so is kshitij, an Indian spy behind enemy lines. What will commando Virat do to rescue
          him and his country?
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

export default HeroPlayingMovies;
