import React from "react";
import Header from "../header/Header";
import styled from "styled-components";
import MyCarousel from "../../carousel/MyCarousel";
// import Footer from "../footer/Footer";
export const H2 = styled.h2`
    text-transform: uppercase;
    font-size: 2.8rem;
    text-align: center;
    word-spacing: 2px;
    margin-bottom: 30px;
    letter-spacing: 1px;
    &::after {
      display: block;
      height: 2px;
      background-color: #ee5a24;
      content: "";
      width: 500px;
      margin: 30px auto;
    }
  `;
const Home = () => {
  const Section = styled.section`
    padding: 80px 0;
  `;



  const P = styled.p`
    font-size: 1.2rem;
    width: 70%;
    margin-left: 15%;
    line-height: 1.5;
    margin-bottom: 20px;
  `;
  return (
    <>
      <Header />
      <Section id="#about">
        <H2>About us</H2>
        <P>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </P>
      </Section>
      <Section
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%"
        }}
      >
       <MyCarousel />
      </Section>

      <Section>
        {/* <Footer /> */}
      </Section>
    </>
  );
};
export default Home;
