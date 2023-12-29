import React, { useEffect } from "react";
import { API_OPTIONS } from "../Constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieDetails } from "../Utils/movieSlice";

const useMovieDetails = (movie_id) => {
  const dispatch = useDispatch();
  const { movieDetails } = useSelector((store) => store.movies);

  const fetchMovieDetails = async () => {
    fetch("https://api.themoviedb.org/3/movie/466420?language=en-US", API_OPTIONS)
      .then((response) => response.json())
      .then((response) => {
        const data = response;
        console.log(response);
        return data;
      })
      .catch((err) => console.error(err));
    // dispatch(addMovieDetails(data));
  };
  useEffect(() => {
    fetchMovieDetails();
  }, [movie_id]);
};

export default useMovieDetails;
