import React, { useEffect, useState, useSyncExternalStore } from "react";
import { API_OPTIONS } from "../Constants/constants";
import "../index.css";

const BackgroundVideoTrailer = ({ id }) => {
  const [trailer, setTrailer] = useState(null);

  const fetchTrailer = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, API_OPTIONS);
      const data = await response.json();
      const trailerData = data.results.filter((movie) => movie.type === "Trailer");
      setTrailer(trailerData);
      console.log(trailerData[0]);
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    fetchTrailer();
  }, []);

  return (
    <div>
      {trailer ? (
        <iframe
          src={`https://www.youtube.com/embed/${trailer[0]?.key}?autoplay=1&loop=1&playlist=${trailer[0]?.key}&controls=0&rel=0`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      ) : (
        <div className="w-full height-full flex justify-center items-center" style={{ height: "100vh" }}>
          <img src="https://eapdea.gov.in/jocv/assets/img/processingN.gif" className="h-20" alt="Loading Img" />
        </div>
      )}
    </div>
  );
};

export default BackgroundVideoTrailer;
