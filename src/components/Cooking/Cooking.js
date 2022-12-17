import React from "react";
import "./cooking.css";
import man from "../../assets/man.png";
import AboutComp from "../About/AboutComp";
const Cooking = () => {
  return (
    <div className="cook-cont">
      <AboutComp
        title="Cooking ingredients"
        title2="What goes in"
        img={man}
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit."
      />
    </div>
  );
};

export default Cooking;
