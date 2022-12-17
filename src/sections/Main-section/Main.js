import React from "react";
import Container from "../../components/Container/Container";
import MainText from "../../components/Main-text/MainText";
import Nav from "../../components/Navbar/Nav";
import "./Main.css";
const Main = () => {
  return (
    <div className="main-cont">
      <Container>
        <Nav />
        <MainText />
      </Container>
    </div>
  );
};

export default Main;
