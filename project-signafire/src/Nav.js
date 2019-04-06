import React from "react";
import "./Nav.css";
import logo from "./logo.png";

const Nav = () => {
  return (
    <div className="NavBar">
      <img src={logo} className="nav-el" alt="logo" />
      <h4 className="nav-el right-el">MESSAGE VIEWER</h4>
    </div>
  );
};

export default Nav;
