import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { user, token } = useSelector((store) => store.user);

  return (
    <div className="fixed top-0 left-0 py-8 px-5 h-full flex flex-col justify-between items-center z-50" id="header">
      <img
        src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
        alt="logo"
        className="w-20"
      />
      <nav className="flex flex-col justify-center items-start mt-20" id="nav">
        <div className="flex items-center justify-start">
          <i className="fa-regular fa-circle-user"></i>
          <span>Account</span>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-tv"></i>
          <span>TV</span>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-baseball"></i>
          <span>Sports</span>
        </div>
      </nav>
      {user && (
        <button className="w-12 py-2 mt-5 bg-gray-700 rounded-md text-white">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </button>
      )}
    </div>
  );
};

export default Header;
