import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav";
import PostList from "../components/PostList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      starred: 0
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <div>
          <div className="pl3 pt4 pb4 f3 b">Starred: {this.state.starred}</div>{" "}
          {/* In className tachyons are used - styling api similar to bootstrap */}
          <PostList users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
