import React from "react";
import About from "../sections/About/About";
import CardsSection from "../sections/Cards/CardsSection";
import Main from "../sections/Main-section/Main";
import Advertise from "../sections/Adv/Advertise";
import Kitchen from "../components/Kitchen/Kitchen";
import Header from "../components/heading/Header";
import Reviews_Blog from "../sections/Reviews_Blog/ReviewsBlog";
import Footer from "../sections/Footer/Footer";

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <CardsSection />
      <Kitchen />
      <Advertise />
      <Header title1="Reviews" title2="words from our food lovers" />
      <Reviews_Blog />
      <Footer />
    </>
  );
};

export default Home;
