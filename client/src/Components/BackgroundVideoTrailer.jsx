import React, { useEffect, useState, useSyncExternalStore } from "react";
import { API_OPTIONS } from "../Constants/constants";
import "../index.css";

const BackgroundVideoTrailer = ({ id }) => {
  const [trailer, setTrailer] = useState(null);
  const fetchTrailer = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
    const data = await response.json();

    if (data.results && Array.isArray(data.results)) {
      const trailerData = data.results.find((movie) => movie.type === "Trailer");
      if (trailer) {
        setTrailer(trailerData[0]);
      } else {
        console.error("No trailer found in the results.");
      }
    } else {
      console.error("Unexpected data structure in the API response.");
    }
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <div>
      {trailer ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&loop=1&playlist=${trailer?.key}&controls=0&rel=0`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ) : (
        <div className="w-full height-full flex justify-center items-center">
          <img src="https://eapdea.gov.in/jocv/assets/img/processingN.gif" className="h-20" alt="Loading Img" />
        </div>
      )}
    </div>
  );
};

export default BackgroundVideoTrailer;
