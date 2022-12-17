import React from "react";
import "./restfooter.css";
import logo from "../../assets/logo.png";
import insta from "../../assets/insta.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import msg from "../../assets/msg.png";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";

const RestFooter = () => {
  return (
    <div className="f-all-cont">
      <div className="footer-cont">
        <div className="column-1">
          <div className="col1-title">
            <img src={logo} alt="" />
            <label>Golden View Dine</label>
          </div>
          <div>
            <p className="col1-txt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sollicitudin
            </p>
          </div>
          <div>
            <img src={insta} alt="" className="icon" />
            <img src={twitter} alt="" className="icon" />
            <img src={youtube} alt="" className="icon" />
          </div>
        </div>
        <div className="column-2">
          <p>Other Links</p>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>blogs</li>
            <li>Our Team</li>
            <li className="col2-li">Our Kitchen</li>
          </ul>
        </div>
        <div className="column-3">
          <p>Contact Us</p>
          <div className="col3-contact">
            <div>
              <img src={msg} alt="email" />
              <label>Gogreendineservice@gmail.com</label>
            </div>
            <div>
              <img src={location} alt="location" />
              <label>AZ complex bylane3 Mandari 1100867 </label>
            </div>
            <div>
              <img src={phone} alt="phone" />
              <label>+1800 287 256</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestFooter;
