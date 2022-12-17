import React from "react";
import "./join.css";
import SecondaryBtn from "../Button/SecondaryBtn";
import golden from "../../assets/golden.png";
const join = () => {
  return (
    <div className="join-all">
      <div className="join-cont">
        <div className="join-img">
          <img src={golden} alt="" />
        </div>
        <div className="join-txt">
          <h3>Come join us for a lunch this weekend and enjoy</h3>
          <p className="join-p">FLAT 10% OFF</p>
          <div>
            <SecondaryBtn title="Book Table" />
          </div>
        </div>
        <div>
          <img src={golden} alt="" />
        </div>
      </div>
    </div>
  );
};

export default join;
