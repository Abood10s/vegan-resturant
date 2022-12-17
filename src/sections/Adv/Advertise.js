import React from "react";
import Join from "../../components/join/Join";
import Cooking from "../../components/Cooking/Cooking";
import Stats from "../../components/stats/Stats";
import stat1 from "../../assets/stats1.png";
import stat2 from "../../assets/stats2.png";
import stat3 from "../../assets/stats3.png";
import "./advertise.css";
const Advertise = () => {
  return (
    <div>
      <Join />
      <Cooking />
      <div className="adv-cont">
        <Stats title="Delicacy" num="250+" img={stat1} />
        <Stats title="renowed chefs" num="10+" img={stat2} />
        <Stats title="Members" num="30+" img={stat3} />
      </div>
    </div>
  );
};

export default Advertise;
