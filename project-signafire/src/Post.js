import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="pic-and-name-sec">
        <img alt="app" src={`https://robohash.org/asd`} />
        <p>Alfonso Mofaso</p>
      </div>
      <div className="date-and-post-sec">
        <p className="post-item">Twitter | March 19, 2019</p>
        <p className="post-item">
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ipsum
          lorem ipsum lorem ipsum lorem epsumlorem ipsum lorem ipsum
        </p>
      </div>
      <div className="star-button-sec">
        <button className="star-button">Star Message!</button>
      </div>
    </div>
  );
};

export default Post;
