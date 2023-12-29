import React, { useEffect, useState } from "react";
import lang from "../Constants/language";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";
import { API_OPTIONS } from "../Constants/constants";

const RelatedMovies = ({ id }) => {
  const [relatedMovies, setRelatedMovies] = useState(null);
  const langKey = useSelector((store) => store.config.lang);

  useEffect(() => {
    const fetchRelated = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      setRelatedMovies(data.results);
      console.log(data);
    };
    fetchRelated();
  }, [id]);
  return (
    <div>
      <h1 className="text-2xl font-semibold text-white mt-10 tracking-wide">{lang[langKey].likeThis}</h1>
      <div className="flex overflow-scroll min-w-full py-12 gap-3 pl-4" id="relatedMovies">
        {relatedMovies ? (
          relatedMovies.map((movie) => <MovieCard movie={movie} />)
        ) : (
          <div className="flex gap-10">
            <ShimmerUI />
          </div>
        )}
      </div>
    </div>
  );
};

export default RelatedMovies;
