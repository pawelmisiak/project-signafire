import React, { Component } from "react";
import Post from "./Post";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.users.map((user, idx) => {
          return (
            <Post
              key={idx}
              id={this.props.users[idx].id}
              name={this.props.users[idx].handle}
              body={this.props.users[idx].content}
              source={this.props.users[idx].source}
              avatar={this.props.users[idx].avatar}
              timestamp={this.props.users[idx].timestamp}
              stars={this.props.stars}
              deleted={this.props.deleted}
            />
          );
        })}
      </div>
    );
  }
}

export default PostList;
