import React from "react";
import Post from "./Post";

const PostList = ({ users }) => {
  return (
    <div>
      {users.map((user, idx) => {
        return (
          <Post
            key={idx}
            userId={users[idx].userId}
            name={users[idx].name}
            body={users[idx].body}
          />
        );
      })}
    </div>
  );
};

export default PostList;
