import React from "react";
import { Component } from "react";
import "./Post.css";
import { isString } from "util";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStarred: false,
      myNum: 1,
      date: ""
    };
  }

  toggleState = () => {
    this.setState({
      isStarred: !this.state.isStarred
    });
  };

  componentDidMount() {
    this.getDate();
  }

  getDate() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let newDate =
      monthNames[this.props.timestamp.slice(5, 7).replace("0", "")] +
      " " +
      this.props.timestamp.slice(8, 10) +
      ", " +
      this.props.timestamp.slice(0, 4);
    console.log(newDate);

    this.setState({
      date: newDate
    });
  }

  render() {
    return (
      <div className="post bg-animate hover-bg-light-gray">
        <div className="pic-and-name-sec">
          <img className="img" alt="app" src={this.props.avatar} />
          <p>{this.props.name}</p>
        </div>
        <div className="date-and-post-sec">
          <p className="post-item">
            {this.props.source} | {this.state.date}
          </p>
          <p className="post-item">{this.props.body}</p>
        </div>
        <div className="star-button-sec">
          <button className="star-button" onClick={this.onClick}>
            Star Message!
          </button>
        </div>
      </div>
    );
  }
}

export default Post;
