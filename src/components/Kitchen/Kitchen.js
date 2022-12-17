import React from "react";
import data from "../../Data";
import Header from "../heading/Header";
import "./kitchen.css";
const Kitchen = () => {
  return (
    <div className="ket-all-cont">
      <Header title1="Straight From Kitchen" title2="Our Menu" />
      <div className="ket-cont">
        {data.map((card) => {
          const { title, par, cost, image } = card;
          return (
            <div className="ket-card">
              <div className="ket-img">
                <img src={image} alt="recipe-img" />
              </div>
              <div>
                <div className="ket-title">{title}</div>
                <div className="ket-par">{par}</div>
              </div>

              <div className="ket-line"></div>
              <div className="ket-cost">{cost}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kitchen;
