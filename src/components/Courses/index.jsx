import React from "react";
import { Card, Container, Icon, Wrapper } from "./style";
import courses from "../../assets/img/courses.png";
import { CardWrapper } from "../Facts/style";
import { courseData } from "../../mock/courses";
import right from "../../assets/icon/right.svg";

const Courses = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <img src={courses} alt="courses" />
          <div className="line"></div>
        </div>
        <Container.Title>O’QUV KURSLARIMIZ</Container.Title>
        <Container.Desc>BIZ BILAN TURLI SOXALARNI O’RGANING</Container.Desc>
        <CardWrapper>
          {courseData.map((value) => {
            return (
              <Card key={value.id}>
                <img src={value.img} alt={value.title} />
                <Card.Title>
                  {value.title} <Icon src={right} alt="" />
                </Card.Title>
              </Card>
            );
          })}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Courses;
