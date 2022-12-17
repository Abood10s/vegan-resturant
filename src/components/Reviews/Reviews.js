import React from "react";
import "./reviews.css";
import star from "../../assets/Vector.png";

const Reviews = ({ av_img, name, txt }) => {
  return (
    <div className="rev-cont">
      <div className="person-cont">
        <div className="avatar">
          <img src={av_img} alt="avatar" />
        </div>
        <div>
          <p className="name">{name}</p>
          <p className="rating">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </p>
        </div>
      </div>
      <div className="rev-txt">{txt}</div>
    </div>
  );
};

export default Reviews;
