import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../Utils/userSlice";
import Cookies from "js-cookie";
import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.user);

  useEffect(() => {
    const token = Cookies.get("token");
    const userInfoString = Cookies.get("user");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    dispatch(setUser({ token: token, user: userInfo }));
  }, []);

  console.log(user, token);
  return (
    <BrowserRouter>
      <div className="flex flex-row">
        <Header />
        <Routes>
          <Route path="/" element={token && user ? <Navigate to="/browse" /> : <Login />} />
          <Route path="/browse" element={token && user ? <Browse /> : <Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Body;
