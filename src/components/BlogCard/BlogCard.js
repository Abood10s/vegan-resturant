import React from "react";
import "./blogcard.css";
const BlogCard = ({ title, recipeimg, txt, reverse }) => {
  return (
    <div
      className="blog-card-cont"
      style={{ flexDirection: `${reverse ? "column" : "column-reverse"}` }}
    >
      <div className="blog-img">
        <img src={recipeimg} alt="" />
      </div>
      <div className="blog-txt">
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <p>{txt}</p>
        </div>
        <div>
          <label className="border">Read More</label>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
