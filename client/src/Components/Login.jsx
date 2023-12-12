import React, { useRef, useState } from "react";
import "../index.css";
import { validateFormData } from "../Utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef();
  const password = useRef();

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleValidate = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const msg = validateFormData(email.current.value, password.current.value);
    setErrorMsg(msg);
    console.log(msg);
  };
  return (
    <div
      id="logInCon"
      style={{
        background:
          "linear-gradient(to left, rgba(1, 20, 124, 0.3), rgba(10,10 , 10, 0.5)), url('Images/background-2.png')",
        backgroundSize: "cover",
      }}
    >
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <h2 className="font-bold text-3xl text-white mb-2">{isSignIn ? "Log In" : "Sign Up"}</h2>
        <p className="text-base text-gray-300 text-left mb-3  tracking-wide">
          to enjoy movies, sports, web series etc.
        </p>
        {!isSignIn && <input type="text" placeholder="Full Name" required />}
        <input ref={email} type="email" placeholder="Email Address" required />
        <div className="relative">
          <input ref={password} type={showPassword ? "text" : "password"} placeholder="Password" required />
          <i
            class={
              !showPassword
                ? "fa-solid fa-eye absolute right-5 top-8 text-xl text-gray-300 cursor-pointer"
                : "fa-solid fa-eye-slash absolute right-5 top-8 text-xl text-gray-300 cursor-pointer"
            }
            onClick={() => setShowPassword(!showPassword)}
          ></i>
        </div>
        <p className=" text-red-500 text-sm pt-4">{errorMsg}</p>
        <button type="submit" onClick={handleValidate}>
          {isSignIn ? "Log In" : "Sign Up"}
        </button>
        <p className="text-base text-gray-200 font-semibold text-left mt-8 cursor-pointer" onClick={handleSignIn}>
          {isSignIn ? "New to Disney+ Hotstar? Sign Up now" : "Already registered? Log In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
