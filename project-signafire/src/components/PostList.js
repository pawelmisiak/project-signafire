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
        <button onClick={this.props.stars}>click me!</button>
        {this.props.users.map((user, idx) => {
          return (
            <Post
              key={idx}
              userId={this.props.users[idx].id}
              name={this.props.users[idx].handle}
              body={this.props.users[idx].content}
              source={this.props.users[idx].source}
              avatar={this.props.users[idx].avatar}
              timestamp={this.props.users[idx].timestamp}
            />
          );
        })}
      </div>
    );
  }
}

export default PostList;

// const PostList = ({ users, props }) => {
//   return (
//     <div>
//       {/* <button onClick={this.props.starredCtr}>click me!</button> */}
//       {users.map((user, idx) => {
//         return (
//           <Post
//             key={idx}
//             userId={users[idx].id}
//             name={users[idx].handle}
//             body={users[idx].content}
//             source={users[idx].source}
//             avatar={users[idx].avatar}
//             timestamp={users[idx].timestamp}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default PostList;
