import "./MyImgStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const MyImg = () => {
  return (
    <div class="hero">
      <div className="content">
        <h1>Hi, I'm Victor </h1>
        <p>I'm a software developer.</p>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className=" btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyImg;
