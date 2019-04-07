import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import myData from "../messages.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [], // holds the users
      starred: 0 // value of starred messages
    };
  }

  starredCtr() {
    this.setState = {
      starred: (this.state.starred += 1)
    };
    console.log(this.state.starred);
  }

  // Load data from the json file
  componentDidMount() {
    var addedData = myData.map((postDetail, idx) => {
      return postDetail;
    });
    this.setState({
      users: addedData
    });
  }

  render(starred) {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <div>
          <div className="pl3 pt4 pb4 f3 b">Starred: {this.state.a}</div>
          {/* In className tachyons are used - styling api similar to bootstrap */}
          <PostList
            users={this.state.users}
            stars={this.starredCtr.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
