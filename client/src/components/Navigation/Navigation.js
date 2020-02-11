import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = props => {
  return (
    <div className="navigation">
      <div className="header">
        <h1>REFUGEE STORIES</h1>
      </div>
      <div className="navlinks">
        
          <NavLink
            exact
            className="home-link"
            to="/"
            activeClassName="selected"
          >
            HOME
          </NavLink>
          <NavLink
            className="stories-link"
            to="/stories"
            activeClassName="selected"
          >
            STORIES
          </NavLink>
          <NavLink
            className="sign-in-link"
            to="/signin"
            activeClassName="selected"
          >
            SIGN IN
          </NavLink>
        
      </div>
    </div>
  );
};

export default Navigation;
