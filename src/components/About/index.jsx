import React from "react";
import CountUp from "react-countup";
import { Container, CounterWrap, EachWrap, Wrapper } from "./style";
import bg from "../../assets/img/background.png";
import tick from "../../assets/icon/tick.svg";
import { countData } from "../../mock/countUp";

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
        <CounterWrap>
          {countData.map((value) => {
            return (
              <EachWrap key={value.id}>
                <CounterWrap.Number>
                  +
                  <CountUp end={value.end} duration={value.duration} />
                </CounterWrap.Number>
                <CounterWrap.Name>{value.who}</CounterWrap.Name>
              </EachWrap>
            );
          })}
        </CounterWrap>
      </Container>
    </Wrapper>
  );
};

export default About;
