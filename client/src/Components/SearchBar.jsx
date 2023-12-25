import React, { useRef } from "react";
import lang from "../Constants/language";
import { useSelector, useDispatch } from "react-redux";
import openai from "../Utils/openAi";
import { API_OPTIONS } from "../Constants/constants";
import { addGptMovieResult } from "../Utils/gptSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const SearchText = useRef(null);

  // ######################    TBDB SEARCH API CALL    ###################################

  const fetchSearchMovies = async (movieName) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movieName + "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const data = await response.json();
    return data.results;
  };

  // ######################    GPT SEARCH API CALL    ###################################

  const handleSubmit = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      SearchText.current.value +
      ". Only give me name of 10 Movies, comma seperated like the example result given ahead. Example Result: Gadar, Koi Mil Gaya, Gabbar is Back, Animal, Golmal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = gptResults?.choices[0]?.message?.content.split(",");

    const promissArray = gptMovies.map((movie) => fetchSearchMovies(movie));
    const tmdbResults = await Promise.all(promissArray);
    console.log(tmdbResults);

    // Add Movies to Redux Store
    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div>
      <form action="#" className="w-full relative" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={SearchText}
          type="search"
          placeholder={lang[langKey].searchPlaceHolder}
          className="w-full p-4 bg-gray-800 rounded-md outline-none text-white text-xl search_box"
        />
        <button
          className="absolute right-2 top-2 text-gray-100 text-xl tracking-wide bg-blue-700 px-4 py-2 rounded-md hover:bg-blue-800"
          onClick={() => handleSubmit()}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
