import React from "react";
import "../index.css";

const HeroPlayingMovies = () => {
  return (
    <div id="heroMovie">
      <video autoPlay muted loop>
        <source src="Images\heroMovie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroPlayingMovies;
