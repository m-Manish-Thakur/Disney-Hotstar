import React, { useRef } from "react";
import lang from "../Constants/language";
import { useSelector } from "react-redux";
import openai from "../Utils/openAi";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const SearchText = useRef(null);

  const handleSubmit = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      SearchText.current.value +
      ". Only give me name of 5 Movies, comma seperated like the example result given ahead. Example Result: Gadar, Koi Mil Gaya, Gabbar is Back, Animal, Golmal";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults);
  };

  return (
    <div>
      <form action="#" className="w-full relative" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={SearchText}
          type="search"
          placeholder={lang[langKey].searchPlaceHolder}
          className="w-full p-4 bg-gray-800 rounded-md outline-none text-white text-xl"
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
