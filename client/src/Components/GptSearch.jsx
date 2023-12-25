import React from "react";
import "../index.css";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import MovieSuggetion from "./MovieSuggetion";

const GptSearch = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  return (
    <div id="searchPage">
      <SearchBar />
      <div className="flex gap-x-2 flex-wrap mt-5 ">
        {movieNames ? (
          movieNames.map((movieName, index) => (
            <MovieSuggetion key={movieName} title={movieName} movies={movieResults[index]} />
          ))
        ) : (
          <>
            <h1></h1>
          </>
        )}
      </div>
    </div>
  );
};

export default GptSearch;
