import React, { useState } from "react";
import "../index.css";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn);
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
      <form action="#">
        <h2 className="font-bold text-3xl text-white mb-2">{isSignIn ? "Log In" : "Sign Up"}</h2>
        <p className="text-base text-gray-300 text-left mb-3  tracking-wide">
          to enjoy movies, sports, web series etc.
        </p>
        {!isSignIn && <input type="text" placeholder="Full Name" required />}
        <input type="email" placeholder="Email Address" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isSignIn ? "Log In" : "Sign Up"}</button>
        <p className="text-base text-gray-200 font-semibold text-left mt-8 cursor-pointer" onClick={handleSignIn}>
          {isSignIn ? "New to Disney+ Hotstar? Sign Up now" : "Already registered? Log In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
