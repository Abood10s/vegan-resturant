import React from "react";
import "./card.css";
const Card = ({ title, body, logo }) => {
  return (
    <div className="card">
      <div className="card-logo">
        <img src={logo} alt="" />
      </div>
      <div>
        <p className="card-title">{title}</p>
      </div>
      <div>
        <p className="card-body">{body}</p>
      </div>
    </div>
  );
};

export default Card;
