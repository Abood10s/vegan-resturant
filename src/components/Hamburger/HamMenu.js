import { React, useState } from "react";
import "./hamMenu.css";

const HamMenu = () => {
  const [view, setView] = useState(false);
  return (
    <div className="ham-all-cont">
      <div className="ham-cont">
        {view ? (
          <i class="fa-solid fa-xmark" onClick={() => setView(!view)}></i>
        ) : (
          <i class="fa-solid fa-bars" onClick={() => setView(!view)}></i>
        )}
      </div>
      {view && (
        <div className="ham-tabs">
          <p>Home</p>
          <p>About</p>
          <p>Special</p>
          <p>Menu</p>
          <p>Blogs</p>
        </div>
      )}
    </div>
  );
};

export default HamMenu;
