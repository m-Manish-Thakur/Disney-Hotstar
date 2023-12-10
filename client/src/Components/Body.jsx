import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import Header from "./Header";

const Body = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/browse" element={<Browse />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
