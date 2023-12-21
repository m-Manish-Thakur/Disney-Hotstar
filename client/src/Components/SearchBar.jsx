import React from "react";
import lang from "../Constants/language";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div>
      <form action="#" className="w-full relative">
        <input
          type="text"
          placeholder={lang[langKey].searchPlaceHolder}
          className="w-full p-4 bg-gray-800 rounded-md outline-none text-white text-xl"
        />
        <i className="fa-solid fa-magnifying-glass absolute right-5 top-4 text-gray-400 text-2xl"></i>
      </form>
    </div>
  );
};

export default SearchBar;
