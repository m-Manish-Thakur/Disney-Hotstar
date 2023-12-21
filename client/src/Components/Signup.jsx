import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axois from "axios";
import "../index.css";
import { validateFormData } from "../Utils/validate";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const username = useRef();
  const email = useRef();
  const password = useRef();

  const handleformSubmit = async () => {
    const msg = validateFormData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg === null) {
      // #######################   USER REGISTRATION   ##################################
      try {
        const response = await axois.post(
          "http://localhost:8000/user/register",
          {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        username.current.value = "";
        email.current.value = "";
        password.current.value = "";
        // Redirect to the login page after successful signup
        navigate("/user/login");
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error === "User already exists") {
          setErrorMsg("User Already Exist, Login Please");
          username.current.value = "";
          email.current.value = "";
          password.current.value = "";
        } else {
          setErrorMsg("Server Error, Login After a time");
        }
      }
    }
  };

  return (
    <div id="logInCon">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <h2 className="font-bold text-3xl text-white mb-2">Sign Up</h2>
        <p className="text-base text-gray-300 text-left mb-3  tracking-wide">
          to enjoy movies, sports, web series etc.
        </p>
        <input ref={username} type="text" placeholder="Full Name" required />
        <input ref={email} type="email" placeholder="Email Address" required />
        <div className="relative">
          <input ref={password} type={showPassword ? "text" : "password"} placeholder="Password" required />
          <i
            className={
              showPassword
                ? "fa-solid fa-eye absolute right-5 top-8 text-xl text-gray-300 cursor-pointer"
                : "fa-solid fa-eye-slash absolute right-5 top-8 text-xl text-gray-300 cursor-pointer"
            }
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        <p className=" text-red-500 text-sm font-semibold pt-4">{errorMsg}</p>
        <button type="submit" onClick={handleformSubmit}>
          Sign Up
        </button>

        <Link to="/user/login">
          <p className="text-base text-gray-200 font-semibold text-left mt-8 cursor-pointer">
            Already registered? Log In now
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
