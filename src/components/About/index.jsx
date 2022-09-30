import React, { useState } from "react";
import CountUp from "react-countup";
import { Container, CounterWrap, EachWrap, Wrapper } from "./style";
import tick from "../../assets/icon/tick.svg";
import { countData } from "../../mock/countUp";
import ScrollTrigger from "react-scroll-trigger";

const About = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={tick} alt="question" />
          <div className="line"></div>
        </div>
        <p className="title">BIZ HAQIMIZDA</p>
        <p className="desc">BIZ HAQIMIZDA MUHIM FAKTLAR</p>
        <CounterWrap>
          {countData.map((value) => {
            return (
              <EachWrap key={value.id}>
                <ScrollTrigger
                  onEnter={() => setCounterOn(true)}
                  onExit={() => setCounterOn(false)}
                >
                  <CounterWrap.Number>
                    +
                    {counterOn && (
                      <CountUp end={value.end} duration={value.duration} />
                    )}
                  </CounterWrap.Number>
                  <CounterWrap.Name>{value.who}</CounterWrap.Name>
                </ScrollTrigger>
              </EachWrap>
            );
          })}
        </CounterWrap>
      </Container>
    </Wrapper>
  );
};

export default About;
