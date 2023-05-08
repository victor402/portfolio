import "./MyAboStyles.css";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJava,
  FaReact,
  FaPython,
  FaNodeJs,
} from "react-icons/fa";

const MyAbo = () => {
  return (
    <div className="myabo">
      <div className="abo">
        <h1>About Me</h1>
        <p>
          I'm a software developer with professional background in customer
          service. As a software developer i leverage my decision making, time
          management, communication, problem solving skills that i have
          developed through this years in building and making web applications.
          I like to create and always looking for new opportunities to expand my
          knowledge and solve problems.
        </p>
        <h4>Skills</h4>

        <ul className="button">
          <li>
            <button>HTML</button>
          </li>
          <li>
            <button>CSS</button>
          </li>
          <li>
            <button>Javascript</button>
          </li>
          <li>
            <button>MongoDB</button>
          </li>
          <li>
            <button>React</button>
          </li>
          <li>
            <button>Django</button>
          </li>
          <li>
            <button>Python</button>
          </li>
          <li>
            <button>Express</button>
          </li>
          <li>
            <button>NodeJS</button>
          </li>
          <li>
            <button>PostgresSQL</button>
          </li>
        </ul>
        <ul className="button2">
          <li>
            <button>GitHub</button>
          </li>
          <li>
            <button>Materialize</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MyAbo;
