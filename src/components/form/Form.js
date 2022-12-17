import React from "react";
import Header from "../heading/Header";
import "./form.css";
const Form = () => {
  return (
    <div className="all-form">
      <i class="fa-solid fa-xmark" className="close-form"></i>
      <Header title1="Reserve a seat" title2="Book A Table On Time" />
      <div className="form-cont">
        <div className="row-1">
          <input type="text" placeholder="Your Full Name" />
          <input type="text" placeholder="Your Phone Number" />
        </div>
        <div className="row-2">
          <input
            type="datetime-local"
            placeholder="Select Date"
            value="2022-12-17T19:30"
          />
          <input type="text" placeholder="Time Slot" />
          <input type="text" placeholder="Occupancy" />
        </div>
      </div>
      <div className="btn-div">
        <button className="form-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Form;
