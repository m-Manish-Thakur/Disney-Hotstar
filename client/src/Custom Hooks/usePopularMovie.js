import React, { useEffect } from "react";
import { API_OPTIONS } from "../../Constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../Utils/movieSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const { popularMovies } = useSelector((store) => store.movies);

  const fetchNowPlaying = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addPopularMovie(data.results));
  };

  useEffect(() => {
    fetchNowPlaying();
  }, []);
};

export default usePopularMovie;
