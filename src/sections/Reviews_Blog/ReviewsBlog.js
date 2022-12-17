import React from "react";
import Reviews from "../../components/Reviews/Reviews";
import "./reviews_blog.css";
import guy from "../../assets/guy.png";
import girl from "../../assets/girl.png";
import BlogCard from "../../components/BlogCard/BlogCard";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

const Reviews_Blog = () => {
  return (
    <section>
      <section className="reviews">
        <Reviews
          name="Alex andrina"
          txt="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
          av_img={girl}
        />
        <Reviews
          name="Alex andrina"
          txt="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
          av_img={guy}
        />
        <Reviews
          name="Alex andrina"
          txt="“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. “"
          av_img={girl}
        />
      </section>
      <section className="blog">
        <BlogCard
          title="Cooking Dining Experience"
          txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          recipeimg={blog1}
          reverse={true}
        />
        <BlogCard
          title="Cooking Dining Experience"
          txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          recipeimg={blog2}
          reverse={false}
        />
        <BlogCard
          title="Cooking Dining Experience"
          txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin "
          recipeimg={blog3}
          reverse={true}
        />
      </section>
    </section>
  );
};

export default Reviews_Blog;
