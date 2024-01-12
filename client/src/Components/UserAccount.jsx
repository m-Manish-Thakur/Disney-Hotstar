import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { SERVER_URL } from "../Constants/constants";
import axios from "axios";
import { IMG_CDN_URL } from "../Constants/constants";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserAccount = () => {
  const { user } = useSelector((store) => store.user);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    fetch_watchlist();
  }, [user]);

  const fetch_watchlist = async () => {
    try {
      // Fetch the updated watchlist
      const response = await axios.get(`${SERVER_URL}/api/watchlist/${user?._id}`);
      const data = await response.data;
      setWatchlist(data);
      console.log(watchlist);
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    }
  };

  const removeMovie = async (id) => {
    try {
      await axios.delete(`${SERVER_URL}/api/watchlist/${user._id}/${id}`);
      fetch_watchlist();
      toast.success("Movie Removed");
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return user ? (
    <div id="userProfile">
      <div className="watchlist">
        <h3>Your Watchlist</h3>
        <div>
          {watchlist.length > 0 ? (
            watchlist.map((item) => (
              <div className="card">
                <Link to={`/movie/${item.movieId}`}>
                  <img src={`${IMG_CDN_URL}/${item?.movieImg}`} alt="" />
                </Link>
                <button onClick={() => removeMovie(item.movieId)}>
                  <i class="fa-regular fa-trash-can"></i>
                </button>
              </div>
            ))
          ) : (
            <h3 style={{ fontWeight: "600" }}>Your watchlist is empty</h3>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full height-full flex justify-center items-center">
      <img src="https://eapdea.gov.in/jocv/assets/img/processingN.gif" className="h-20" alt="Loading Img" />
    </div>
  );
};

export default UserAccount;
