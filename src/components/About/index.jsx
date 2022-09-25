import React from "react";
import CountUp from "react-countup";
import { Container, CounterWrap, EachWrap, Wrapper } from "./style";
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
        <CounterWrap>
          <EachWrap>
            <CounterWrap.Number>
              +
              <CountUp end={10} duration={1} />
              <CounterWrap.Teacher> Ustozlar</CounterWrap.Teacher>
            </CounterWrap.Number>
          </EachWrap>

          <EachWrap>
            <CounterWrap.Number>
              +
              <CountUp end={3800} duration={5} />
              <CounterWrap.Teacher> O’quvchilar</CounterWrap.Teacher>
            </CounterWrap.Number>
          </EachWrap>

          <EachWrap>
            <CounterWrap.Number>
              +
              <CountUp end={40} duration={2} />
              <CounterWrap.Teacher> Kurslar</CounterWrap.Teacher>
            </CounterWrap.Number>
          </EachWrap>
        </CounterWrap>
      </Container>
    </Wrapper>
  );
};

export default About;
