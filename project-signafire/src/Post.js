import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="pic-and-name-sec">
        <img alt="app" src={`https://robohash.org/asd?size=200x200`} />
        <p>Alfonso Mofaso</p>
      </div>
      <div className="date-and-post-sec">
        <p>Twitter | March 19, 2019</p>
        <p>
          lorem epsum lorem epsum lorem epsum lorem epsum lorem epsum lorem
          epsum lorem epsum lorem epsumlorem epsum lorem epsum
        </p>
      </div>
      <div className="star-button-sec" />
      <button className="star-button">hey</button>
    </div>
  );
};

export default Post;
