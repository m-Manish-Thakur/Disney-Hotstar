import React, { useEffect } from "react";
import "../index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../Utils/userSlice";
import Cookies from "js-cookie";
// Pages ----------------------------------------------
import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";
import UserAccount from "./UserAccount";
import MovieDetails from "./MovieDetails";

const Body = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.user);

  useEffect(() => {
    const token = Cookies.get("token");
    const userInfoString = Cookies.get("user");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    dispatch(setUser({ token: token, user: userInfo }));
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <div id="body">
        <Header />
        <Routes>
          <Route path="/" element={user ? <Browse /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/user/profile" element={<UserAccount />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Body;
