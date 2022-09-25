import React from "react";
import CountUp from "react-countup";
import { Container, Wrapper } from "./style";
import bg from "../../assets/img/background.png";
import tick from "../../assets/icon/tick.svg";

const About = () => {
  return (
    <Wrapper>
      <img src={bg} alt="" />
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={tick} alt="question" />
          <div className="line"></div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default About;
