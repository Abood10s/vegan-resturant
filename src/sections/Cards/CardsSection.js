import React from "react";
import Card from "../../components/Cards/Card";
import logo1 from "../../assets/orangejuice.png";
import logo2 from "../../assets/chef.png";
import logo3 from "../../assets/rst.png";

import "./cardssection.css";
import Header from "../../components/heading/Header";
const CardsSection = () => {
  return (
    <div className="all-cont">
      <Header title1="Special" title2="What makes us special" />
      <div className="cards-cont">
        <Card
          title="Fresh food"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          logo={logo1}
        />
        <Card
          title="skilled Chef"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          logo={logo2}
        />
        <Card
          title="Exotic dishes"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          logo={logo3}
        />
      </div>
    </div>
  );
};

export default CardsSection;
