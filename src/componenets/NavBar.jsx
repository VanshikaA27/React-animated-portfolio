import React from "react";
import { a } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="left nav_items"> <span style={{color: "yellow"}}>Porfolio</span> </div>
        <div className="right">
          <a href= "#home" className="nav_items">
            Home
          </a>
          <a href="#experience" className="nav_items">
            Experience
          </a>
          <a href="#skills" className="nav_items">
            Skills
          </a>
          <a href="#projects" className="nav_items">
            Projects
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
