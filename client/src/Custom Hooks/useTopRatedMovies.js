import React, { useEffect } from "react";
import { API_OPTIONS } from "../Constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovie } from "../Utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const fetchTopRated = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addTopRatedMovie(data.results));
  };

  useEffect(() => {
    fetchTopRated();
  }, []);
};

export default useTopRatedMovies;
