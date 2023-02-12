import React from "react";
import SecondaryBtn from "../Button/SecondaryBtn";
import "./MainText.css";
const MainText = () => {
  return (
    <div className="main-txt">
      <h2 className="main-title">Welcome To the Golden View Dine</h2>
      <p>Explore the authentic vegan dishes with your friends and family</p>
      <SecondaryBtn title="Read more" />
    </div>
  );
};

export default MainText;
