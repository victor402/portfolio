import "./WorkFlowStyles.css";
import React from "react";

import { NavLink } from "react-router-dom";

const WorkFlow = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <NavLink to={props.view} className="btn">
            SITE
          </NavLink>
          <NavLink to={props.github} className="btn">
            GITHUB
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
