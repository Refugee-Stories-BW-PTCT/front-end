import React from "react";
import Carousel from "../Carousel/MyCarousel.js";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { borderRadius } from "@material-ui/system";
import Button from 'react-bootstrap/Button'; 
import "./Home.css";

const Home = () => {
  const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fef9c7;
    color: #7e685a;
    height: 100vh;
    font-family: Ubuntu;
    text-align: justify;
    padding: 1rem;
    max-width: 46rem;
  `;

  const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    self-align: center;
    width: 7rem;
    font-size: 1rem;
    padding: 0.5rem;
    margin-top: 2rem;
    font-weight: 900;
    margin-bottom: 3rem;
    font-family: "Roboto";
    @media (min-width: 300px) {
      width: 10rem;
      font-size: 1.1rem;
      padding: 0.8rem;
    }
    @media (min-width: 500px) {
      width: 10rem;
      font-size: 1.2rem;
      padding: 1rem;
    }
    @media (min-width: 800px) {
    }
    @media (min-width: 1024px) {
    }
  `;

  const Form = styled.form`
    
  `;

  const Paragraph = styled.p`
    padding: 0;
    margin: 0;
    padding-top: 2rem;
    @media (min-width: 320px) {
      height: 10rem * 1.2;
      width: 15rem * 1.2;
    }


  `;

  return (
    <div className="homepage">
      <WrapperDiv className="wrapper">
        <Carousel />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta
          sequi reprehenderit tempore dolores at incidunt tempora ipsum eveniet
          illo, dolor sed dolorum reprehenderit tempore dolores at incidunt
          tempora ipsum eveniet illo, dolor sed placeat, delectus adipisci
          consequuntur minus! Molestiae, nostrum!
        </Paragraph>
        <Form action="./Stories">
        <Link to="/Stories" style={ {textDecoration: 'none' }}>
          <StyledButton  className="button" type="submit" value="Read More">
          READ MORE
          </StyledButton>
          </Link>
        </Form>
      </WrapperDiv>
      <Footer />
    </div>
  );
};

export default Home;

export const footerdes = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column"
};
export const footerdes2 = {
  flex: "1"
};

export const footerdes3 = {
  marginTop:"37px"

};

export const Footer = () => {
  return (
    <div style={footerdes3}>
        <Button variant="outline-secondary">Copyright @ 2020</Button>
        <Button variant="outline-secondary">Help</Button>
        <Button variant="outline-secondary">About</Button>
        <Button variant="outline-secondary">Refugee Connections</Button>
      
    </div>
  );
};
