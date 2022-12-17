import React from "react";
import "./subscribe.css";
import msg2 from "../../assets/msg2.png";
import SecondaryBtn from "../Button/SecondaryBtn";
const Subscribe = () => {
  return (
    <div className="subs-cont">
      <div className="col-1">
        <img src={msg2} alt="" />
        <p>Subscribe to our Newsletter</p>
      </div>
      <div>
        <input type="text" placeholder="Your Email id" className="sub-input" />
      </div>
      <div>
        <SecondaryBtn title="Subscribe" />
      </div>
    </div>
  );
};

export default Subscribe;
