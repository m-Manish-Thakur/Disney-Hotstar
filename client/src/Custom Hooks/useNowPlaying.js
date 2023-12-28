import React, { useEffect } from "react";
import { API_OPTIONS } from "../../Constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../Utils/movieSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const { nowPlayingMovies } = useSelector((store) => store.movies);

  const fetchNowPlaying = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addNowPlayingMovie(data.results));
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);
};

export default useNowPlaying;
