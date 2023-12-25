import React from "react";
import MovieCard from "./MovieCard";

const MovieSuggetion = ({ title, movies }) => {
  return (
    <div>
      <div className="py-10">
        {/* <h1 className="text-lg md:text-3xl font-semibold py-4 text-white">{title}</h1> */}
        <div className="flex w-full py-1 flex-wrap gap-y-10 ">
          <MovieCard movie={movies[0]} />
        </div>
      </div>
    </div>
  );
};

export default MovieSuggetion;
