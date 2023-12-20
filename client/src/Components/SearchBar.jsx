import React from "react";

const SearchBar = () => {
  return (
    <div>
      <form action="#" className="w-full relative">
        <input
          type="text"
          placeholder="What would you like to watch.."
          className="w-full p-4 bg-gray-800 rounded-md outline-none text-white text-xl"
        />
        <i class="fa-solid fa-magnifying-glass absolute right-5 top-4 text-gray-400 text-2xl"></i>
      </form>
    </div>
  );
};

export default SearchBar;
