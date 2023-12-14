import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { user, token } = useSelector((store) => store.user);

  return (
    <div className="fixed top-0 left-0 py-5 px-6 h-full flex flex-col">
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
      {user && <button className="p-2 bg-blue-600 rounded-md text-white">Log Out</button>}
    </div>
  );
};

export default Header;
