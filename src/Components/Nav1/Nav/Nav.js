import React, { Component } from "react";
import "./Nav.scss";
import Links from "../Links/Links";
import SearchInput from "../SearchInput/SearchInput";

export default class Nav extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left-section">
          <div className="logo">Uber</div>
          <Links />
        </div>
        <div className="navbar-right-section">
          <SearchInput />
        </div>
      </div>
    );
  }
}
