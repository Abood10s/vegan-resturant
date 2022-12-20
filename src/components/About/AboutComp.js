import React from "react";
import SecondaryBtn from "../Button/SecondaryBtn";
import "./aboutComp.css";
const AboutComp = ({ title, title2, img, body }) => {
  return (
    <div className="about-cont">
      <div className="about-text">
        <div>
          <h3>{title}</h3>
          <p className="sec-title">{title2}</p>
        </div>
        <div className="abt-txt">
          <p>{body}</p>
        </div>
        <div className="ab-btn">
          <SecondaryBtn title="Read more" />
        </div>
      </div>
      <div className="about-img">
        <img src={img} alt="about img" />
      </div>
    </div>
  );
};

export default AboutComp;
