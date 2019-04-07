import React from "react";
import Post from "./Post";

const PostList = ({ users }) => {
  return (
    <div>
      {users.map((user, idx) => {
        return (
          <Post
            key={idx}
            userId={users[idx].id}
            name={users[idx].handle}
            body={users[idx].content}
            source={users[idx].source}
            avatar={users[idx].avatar}
            timestamp={users[idx].timestamp}
          />
        );
      })}
    </div>
  );
};

export default PostList;
