import React from "react";
import CountUp from "react-countup";
import { Container, Wrapper } from "./style";
import bg from "../../assets/img/background.png";
import tick from "../../assets/icon/tick.svg";

const About = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={tick} alt="question" />
          <div className="line"></div>
        </div>
        <Container.Title>BIZ HAQIMIZDA</Container.Title>
        <Container.Desc>BIZ HAQIMIZDA MUHIM FAKTLAR</Container.Desc>
      </Container>
    </Wrapper>
  );
};

export default About;
