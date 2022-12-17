import React from "react";
import AboutComp from "../../components/About/AboutComp";
import aboutimg from "../../assets/about.png";
const About = () => {
  return (
    <div>
      <AboutComp
        title="About Us"
        title2="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
        img={aboutimg}
        body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer nulla orci convallis sit. At libero lacus, eget fermentum sed turpis curabitur donec consectetur. Imperdiet aliquam quam mauris semper suscipit."
      />
    </div>
  );
};

export default About;
