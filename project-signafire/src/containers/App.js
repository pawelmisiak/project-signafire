import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import myData from "../messages.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      starred: 0
    };
  }

  starredCtr() {
    this.setState = {
      starred: (this.starred += 1)
    };
  }

  componentDidMount() {
    var addedData = myData.map((postDetail, idx) => {
      return postDetail;
    });
    this.setState({
      users: addedData
    });
  }
  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then(response => response.json())
  //     .then(responsed => this.setState({ users: responsed }));
  // }

  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <div>
          <div className="pl3 pt4 pb4 f3 b">Starred: {this.state.starred}</div>{" "}
          {/* In className tachyons are used - styling api similar to bootstrap */}
          <PostList users={this.state.users} starred={this.starredCtr} />
        </div>
      </div>
    );
  }
}

export default App;
