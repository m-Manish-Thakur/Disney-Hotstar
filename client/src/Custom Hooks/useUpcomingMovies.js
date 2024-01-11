import { useEffect } from "react";
import { API_OPTIONS } from "../Constants/constants";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../Utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const fetchUpComing = async () => {
    const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
    const data = await response.json();
    dispatch(addUpComingMovies(data.results));
  };

  useEffect(() => {
    fetchUpComing();
  }, []);
};

export default useUpcomingMovies;
