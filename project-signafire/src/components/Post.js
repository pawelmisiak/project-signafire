import React from "react";
import "./Post.css";

const Post = ({ userId, name, body }) => {
  return (
    <div className="post">
      <div className="pic-and-name-sec">
        <img alt="app" src={`https://robohash.org/${userId}`} />
        <p>{userId}</p>
        {/* <p>Alfonso Mofaso</p> */}
      </div>
      <div className="date-and-post-sec">
        <p className="post-item">
          Twitter | March {Math.floor(Math.random() * 30)}, 201
          {Math.floor(Math.random() * 10)}
        </p>
        <p className="post-item">{body}</p>
      </div>
      <div className="star-button-sec">
        <button className="star-button">Star Message!</button>
      </div>
    </div>
  );
};

export default Post;
