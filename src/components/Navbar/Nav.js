import React from "react";
import MainButton from "../Button/MainButton";
import restLogo from "../../assets/logo.png";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="navbar">
      <div className="rest-logo">
        <img src={restLogo} alt="vegan restaurant logo" />
      </div>
      <div>
        <ul className="tabs">
          <li>Home</li>
          <li>About US</li>
          <li>Special</li>
          <li>Menu</li>
          <li>Blogs</li>
          <li>
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ backgroundColor: "#A08040;" }}
            ></i>
          </li>
        </ul>
      </div>
      <MainButton title="Book Now" />
    </div>
  );
};

export default Nav;
