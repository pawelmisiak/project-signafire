import React, { Component } from "react";
import "./App.css";
import Nav from "../components/Nav";
import PostList from "../components/PostList";
import myData from "../data/messages.json";
import Button from "react-bootstrap/Button";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [], // holds the users
      starred: 0, // value of starred messages
      deleted: [],
      isUsers: true
    };
  }

  // Check if data is starred and update Starred label
  starredCtr(isStarred) {
    this.setState({
      starred: isStarred ? this.state.starred + 1 : this.state.starred - 1
    });
  }

  addToTrash(id) {
    var del = this.state.deleted;
    var index = 0;

    del.push(
      this.state.users.filter(function(item, idx) {
        if (item.id === id) {
          index = idx;
        }
        return item.id === id;
      })
    );
    this.setState({
      deleted: del
    });
    console.log(index);
    this.updateUsersAfterDeletion(index);
    console.log(this.state.deleted[0]);
  }

  updateUsersAfterDeletion(idx) {
    var temp = this.state.users.slice();
    temp.splice(idx, 1);
    console.log(this.state.users.length);
    console.log(temp.length);
    console.log(this.state.deleted.length);
    this.setState({
      users: temp
    });
    console.log("length after" + this.state.users.length);
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

  changeView() {
    var tempView = this.state.users;
    this.setState({
      users: this.state.deleted,
      deleted: tempView,
      isUsers: !this.state.isUsers
    });
  }

  render(starred) {
    return (
      <div className="App">
        <nav>
          <Nav />
        </nav>
        <div>
          <div className="starredAndTrashed">
            <h3 className="ml4 pt4 pb4 f3 b">Starred: {this.state.starred}</h3>
            <Button
              variant="outline-warning"
              style={{
                background: this.state.isUsers ? "" : "#f5b400",
                color: this.state.isUsers ? "" : "black"
              }}
              className="trashButton mr4"
              onClick={event => {
                this.changeView();
              }}
            >
              {" "}
              Trashed
            </Button>
          </div>
          {/* In className tachyons are used - styling api similar to bootstrap */}
          <PostList
            users={this.state.users}
            stars={this.starredCtr.bind(this)}
            deleted={this.addToTrash.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
