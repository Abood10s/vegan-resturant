import React from "react";
import "./stats.css";
const Stats = ({ title, num, img }) => {
  return (
    <div className="stat-cont">
      <div className="stat-img">
        <img src={img} alt="" />
      </div>
      <div className="stat-txt">
        <p className="stat-num">{num}</p>
        <p className="stat-title">{title}</p>
      </div>
    </div>
  );
};

export default Stats;
