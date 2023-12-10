import React from "react";
import "../index.css";

const Login = () => {
  return (
    <div
      id="logInCon"
      style={{
        background:
          "linear-gradient(to bottom, rgba(1, 20, 124, 0.3), rgba(28, 29, 30, 0.068)), url('Images/background-2.png')",
        backgroundSize: "cover",
      }}
    >
      <form action="#">
        <h2 className="font-bold text-3xl text-white text-center">Log in</h2>
        <p className="text-base text-gray-400 text-center mt-2  tracking-wide">
          or <span className="text-blue-600 font-medium underline">register</span> to continue
        </p>
        <br />
        <input type="email" placeholder="Enter email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
