import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, token } = useSelector((store) => store.user);

  return (
    <div className="fixed top-0 left-0 py-8 px-5 h-full flex flex-col z-50" id="header">
      <img
        src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
        alt="logo"
        className="w-20"
      />
      <nav className="flex flex-col justify-center items-start mt-16" id="nav">
        <div className="flex items-center justify-start">
          <i className="fa-regular fa-circle-user"></i>
          <span>Account</span>
        </div>
        <div className="flex items-center">
          <i className="fa-solid fa-magnifying-glass"></i>
          <span>Search</span>
        </div>
        <Link to="/">
          <div className="flex items-center">
            <i className="fa-solid fa-house"></i>
            <span>Home</span>
          </div>
        </Link>
        <Link to="/tv-shows">
          <div className="flex items-center">
            <i className="fa-solid fa-tv"></i>
            <span>TV</span>
          </div>
        </Link>
        <Link to="/movies">
          <div className="flex items-center">
            <i class="fa-solid fa-film"></i>
            <span>Movies</span>
          </div>
        </Link>
        <div className="flex items-center">
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
          <span>Logout</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
