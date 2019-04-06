import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Post from "./Post";
import PostList from "./PostList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(users => this.setState({ users: users }));
  }

  randomize() {
    // Temporary function
    return Math.floor(Math.random() * 10);
  }
  render() {
    // const listOfUsers = this.state.users.filter(user => {
    //   return user.name;
    // });
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <body>
          <div className="pl3 pt4 pb4 f3 b">Starred: {this.randomize()}</div>
          <PostList users={this.state.users} />
        </body>
      </div>
    );
  }
}

export default App;
