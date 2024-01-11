import React from "react";
import "../index.css";

const Footer = () => {
  return (
    <div id="footer">
      <p>Made with ❤️ by Manish Thakur</p>
      <div className="buttons">
        <button>
          <a href="https://www.linkedin.com/in/manish-thakur231690/" target="_blank">
            LinkedIn <i className="fa-brands fa-linkedin"></i>
          </a>
        </button>
        <button>
          <a href="https://github.com/m-Manish-Thakur" target="_blank">
            GitHub <i className="fa-brands fa-github"></i>
          </a>
        </button>
        <button>
          <a href="https://manish-thakur-portfolio.netlify.app/" target="_blank">
            Portfolio <i className="fa-regular fa-file-lines"></i>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Footer;
