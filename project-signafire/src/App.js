import React, { Component } from "react";
import "./App.css";
import Nav from "./Nav";
import Post from "./Post";
import users from "./users";

class App extends Component {
  randomize() {
    // Temporary function
    return Math.floor(Math.random() * 10);
  }
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <body>
          <div className="pl3 pt4 pb4 f3 b">Starred: {this.randomize()}</div>
          <Post />
        </body>
      </div>
    );
  }
}

export default App;
