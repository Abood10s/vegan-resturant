import React from "react";
import "./header.css";
const Header = ({ title1, title2 }) => {
  return (
    <div className="h-text">
      <h3 className="h-title1">{title1}</h3>
      <p className="h-title2">{title2}</p>
    </div>
  );
};

export default Header;
