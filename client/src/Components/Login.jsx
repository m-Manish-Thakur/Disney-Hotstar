import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser, clearUser } from "../Utils/userSlice";
import Cookies from "js-cookie";
import axois from "axios";
import "../index.css";
import { validateFormData } from "../Utils/validate";
import { SERVER_URL } from "../Constants/constants";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const dispatch = useDispatch();
  const { user, token } = useSelector((store) => store.user);

  useEffect(() => {
    const token = Cookies.get("token");
    const userInfoString = Cookies.get("user");
    const userInfo = userInfoString ? JSON.parse(userInfoString) : null;
    dispatch(setUser({ token: token, user: userInfo }));
  }, []);

  const email = useRef();
  const password = useRef();

  const handleformSubmit = async () => {
    const msg = validateFormData(email.current.value, password.current.value);
    setErrorMsg(msg);

    if (msg === null) {
      // #######################   USER LOGIN   ##################################
      try {
        const response = await axois.post(
          `${SERVER_URL}/user/login`,
          {
            email: email.current.value,
            password: password.current.value,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        // Save the token and user data in Redux store
        dispatch(setUser({ user: response.data.user, token: response.data.token }));

        // Store token & user in cookie
        Cookies.set("token", response.data.token, { expires: 1 });
        Cookies.set("user", JSON.stringify(response.data.user), { expires: 1 });
        // Redirect to the home page after successful login
        window.location.href = "/";
        email.current.value = "";
        password.current.value = "";
      } catch (error) {
        if (error.response && error.response.data && error.response.data.error === "User doesn't exists") {
          setErrorMsg("User doesn't exists, Register Now");
          email.current.value = "";
          password.current.value = "";
          setShowPassword(false);
        } else if (
          error.response &&
          error.response.data &&
          error.response.data.error === "Email or password is invalid"
        ) {
          setErrorMsg("Email or password is invalid");
          email.current.value = "";
          password.current.value = "";
          setShowPassword(false);
        } else {
          setErrorMsg("Server Error, Login After a time");
        }
      }
    }
  };

  return (
    <div id="logInCon">
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <h2 className="font-bold text-3xl text-white mb-2">Log In</h2>
        <p className="text-base text-gray-300 text-left mb-3  tracking-wide">
          to enjoy movies, sports, web series etc.
        </p>
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
          Log In
        </button>
        <Link to="/user/signup">
          <p className="text-base text-gray-200 font-semibold text-left mt-8 cursor-pointer">
            New to Disney+ Hotstar? Sign Up now
          </p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
