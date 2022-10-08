import React from "react";
import { Card, Container, VideWrap, Wrapper } from "./style";
import play from "../../assets/icon/play.svg";
import { lessonsData } from "../../mock/lessonsData";

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
        <VideWrap>
          {lessonsData.map((value) => {
            return (
              <Card>
                <iframe src={value.frame}></iframe>
                <p className="desc">{value.title}</p>
              </Card>
            );
          })}
        </VideWrap>
      </Container>
    </Wrapper>
  );
};

export default Lessons;
