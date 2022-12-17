import React from "react";
import Form from "../form/Form";
import { useState } from "react";
import "./Button.css";
const MainButton = ({ title }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <button className="btn" onClick={handleClick}>
        {title}
      </button>
      {show && <Form />}
    </>
  );
};

export default MainButton;
