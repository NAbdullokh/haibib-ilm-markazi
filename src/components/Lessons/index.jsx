import React from "react";
import { Container, Wrapper } from "./style";
import play from "../../assets/icon/play.svg";

const Lessons = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={play} alt="question" />
          <div className="line"></div>
        </div>
        <p className="title">MEDIA</p>
        <div className="desc">DARSLARIMIZDAN LAVHALAR</div>
      </Container>
    </Wrapper>
  );
};

export default Lessons;
