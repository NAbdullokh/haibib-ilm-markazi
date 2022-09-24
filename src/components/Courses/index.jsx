import React from "react";
import { Container, Wrapper } from "./style";
import courses from "../../assets/img/courses.png";

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
      </Container>
    </Wrapper>
  );
};

export default Courses;
