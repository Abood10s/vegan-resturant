import React from "react";
import "./copyright.css";
const CopyRight = ({ title, body }) => {
  return (
    <div className="copy-cont">
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default CopyRight;
