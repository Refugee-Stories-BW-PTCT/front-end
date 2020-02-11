import React from "react";
import Nav from "../nav/Nav";
import styled from "styled-components";
import myImage from "./header.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const MainHeader = styled.header`
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${myImage});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
    background-attachment: fixed;
  `;
  const HeroText = styled.div`
    position: absolute;
    top: 60%;
    left: 40%;
    transform: translate(-50%, -50%);
  `;
  const H1 = styled.h1`
    font-size: 3.8rem;
    color: #fff;
    word-spacing: 4px;
    margin: 0 0 20px 0;
    letter-spacing: 1px;
  `;
  const SignUpBtn = styled.button`
    font-size: 1.8rem;
    padding: 10px 30px;
    font-weight: 300;
    border-radius: 10px;
    border: 1px solid #ee5a24;
    margin-right: 20px;
    text-transform: capitalize;
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
    background-color: #ee5a24;
    color: #fff;
    &:hover {
      background: rgba(0, 0, 0, 0.5);
    }
  `;
  const ShowMoreBtn = styled.button`
    font-size: 1.8rem;
    padding: 10px 30px;
    font-weight: 300;
    border-radius: 10px;
    border: 1px solid #ee5a24;
    margin-right: 20px;
    text-transform: capitalize;
    transition: all 0.4s;
    background: rgba(0, 0, 0, 0.5);
    color: #ee5a24;
    &:hover {
      background: #ee5a24;
      color: #fff;
    }
  `;

  return (
    <>
      <MainHeader>
        <Nav />
        <HeroText>
          <H1>
            Refugee Stories <br />
            you can help us!
          </H1>
          <Link to="/login">
            {" "}
            <SignUpBtn>Sign up</SignUpBtn>{" "}
          </Link>
          <Link to="/stories">
            <ShowMoreBtn to="#about">Show more</ShowMoreBtn>
          </Link>
        </HeroText>
      </MainHeader>
    </>
  );
};
export default Header;
