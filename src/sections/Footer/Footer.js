import React from "react";
import RestFooter from "../../components/footer/RestFooter";
import Subscribe from "../../components/subscribe/Subscribe";
import CopyRight from "../../components/copy right/CopyRight";
const Footer = () => {
  return (
    <section>
      <RestFooter />
      <Subscribe />
      <CopyRight
        title="Copyright @ Golden Dine Website"
        body="All rights reserved"
      />
    </section>
  );
};

export default Footer;
