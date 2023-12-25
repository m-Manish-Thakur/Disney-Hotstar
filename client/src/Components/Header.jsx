import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeLanguage } from "../Utils/configSlice";
import lang from "../Constants/language";

const Header = () => {
  const { user, token } = useSelector((store) => store.user);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
    console.log(e.target.value);
  };

  return (
    <>
      <div id="Header_Mobile">
        <img
          src="https://images.firstpost.com/wp-content/uploads/2019/11/Disneyplus.jpg"
          alt=""
          className="responsiveLogo"
        />
      </div>
      <div className="fixed top-0 left-0 py-8 px-5 h-full flex flex-col z-50" id="header">
        <img
          src="https://img.hotstar.com/image/upload/v1656431456/web-images/logo-d-plus.svg"
          alt="logo"
          className="w-20"
        />

        {user ? (
          <nav className="flex flex-col justify-center items-start mt-16" id="nav">
            <div className="flex items-center justify-start">
              <i className="fa-regular fa-circle-user"></i>
              <span>{lang[langKey].account}</span>
            </div>
            <Link to="/search">
              <div className="flex items-center">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span>{lang[langKey].search}</span>
              </div>
            </Link>
            <Link to="/">
              <div className="flex items-center">
                <i className="fa-solid fa-house"></i>
                <span>{lang[langKey].home}</span>
              </div>
            </Link>
            <Link to="/movies">
              <div className="flex items-center">
                <i className="fa-solid fa-film"></i>
                <span>{lang[langKey].movies}</span>
              </div>
            </Link>
            <div className="flex items-center relative">
              <i className="fa-solid fa-language"></i>
              <span>
                <select className="bg-gray-600 rounded-lg outline-none overflow-hidden" onChange={handleLangChange}>
                  <option value="en">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="spanish">Spanish</option>
                </select>
              </span>
            </div>
            <div className="flex items-center logout">
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
              <span>{lang[langKey].logout}</span>
            </div>
          </nav>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Header;
