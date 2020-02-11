import React from "react";
import { NavLink   } from "react-router-dom";
import styled from "styled-components";
import { getToken } from "../../../utils/api";

const Nav = () => {
  const NavBar = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `;
  const Links = styled.div`
    display: flex;
    justify-content: space-around;
    width: 60%;
    align-items: center;
    text-transform: capitalize;
    a {
      color: #fff;
      font-size: 1.8rem;
      border-bottom: 4px solid orange;
      padding: 10px;
      font-size: 1.6rem;
      text-transform: capitalize;
      border-bottom: 3px solid transparent;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      &:hover {
        border-bottom: 3px solid #ee5a24;
      }
    }
  `;

  const signIn = getToken();

  return (
    <NavBar>
      <Links>
        <NavLink style={{ textDecoration: "none" }} to="/">Home{" "}</NavLink>
        {signIn && (<NavLink style={{ textDecoration: "none" }} to="/stories">Stories</NavLink>)}
        {signIn && (<NavLink style={{ textDecoration: "none" }} to="/submitstory">Submit Story</NavLink>)}
        {signIn && (<NavLink style={{ textDecoration: "none" }} to="/pending">Pending</NavLink>)}
        {!signIn && (<NavLink style={{ textDecoration: "none" }} to="/login">Login</NavLink>) }
        {!signIn && (<NavLink style={{ textDecoration: "none" }} to="/admin">Admin</NavLink>) }
        {!signIn && (<NavLink style={{ textDecoration: "none" }} to="/register">Register</NavLink>) }
        {signIn && (<NavLink style={{ textDecoration: "none" }} to="/logout"> Log Out</NavLink>)}
      </Links>
    </NavBar>
  );
};

export default Nav;
