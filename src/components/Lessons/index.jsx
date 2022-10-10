import React from "react";
import { BtnWrap, Card, Container, VideWrap, Wrapper } from "./style";
import play from "../../assets/icon/play.svg";
import { lessonsData } from "../../mock/lessonsData";
import Button from "../../generic/Button";

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
                <p style={{ color: "black" }} className="desc">
                  {value.title}
                </p>
                <BtnWrap href={value.frame} target="_blank">
                  <Button height={"50px"}>Korish</Button>
                </BtnWrap>
              </Card>
            );
          })}
        </VideWrap>
      </Container>
    </Wrapper>
  );
};

export default Lessons;
