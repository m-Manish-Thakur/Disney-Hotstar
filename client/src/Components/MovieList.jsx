import React from "react";
import NowPlayingMovies from "./NowPlayingMovies";
import PopularMovies from "./PopularMovies";
import TopRatedMovies from "./TopRatedMovies";
import Footer from "./Footer";
import UpComingMovies from "./UpComingMovies";

const MovieList = () => {
  return (
    <div id="movieList">
      <div class="content">
        <img
          src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/9166/1569166-t-0f0a4a6681b3"
          alt="moviename"
          style={{ width: "90%" }}
        />
        <h4 className="mt-4 font-bold text-lg tracking-wide">2023 • 1 Season • 7 Languages</h4>
        <p className="mt-4 text-lg text-gray-200 traking-wide">
          India is in danger. And so is kshitij, an Indian spy behind enemy lines. What will commando Virat do to rescue
          him and his country?
        </p>
        <h5 className="mt-6 font-semibold text-lg">Action | Trailer</h5>
        <button className="mt-8 w-80 py-3 rounded-md bg-gray-200/[.7] text-black text-lg tracking-wider font-semibold hover:bg-gray-500/[.8]">
          <i className="fa-solid fa-play mr-2"></i> Watch Now
        </button>
        <button className="mt-8 px-5 py-3 ml-5 rounded-md bg-gray-600/[.7] text-white text-lg tracking-wider font-semibold hover:bg-gray-500/[.8]">
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <NowPlayingMovies />
      <UpComingMovies />
      <PopularMovies />
      <TopRatedMovies />
      <Footer />
    </div>
  );
};

export default MovieList;
