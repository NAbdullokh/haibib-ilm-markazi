import React from "react";
import { Card, Container, Icon, Wrapper, CardWrapper } from "./style";
import courses from "../../assets/img/courses.png";
import { courseData } from "../../mock/courses";
import right from "../../assets/icon/right.svg";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  return (
    <Wrapper id="courses">
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <img src={courses} alt="courses" />
          <div className="line"></div>
        </div>
        <p style={{ color: "black" }} className="title">
          O’QUV KURSLARIMIZ
        </p>
        <p style={{ color: "black" }} className="desc">
          BIZ BILAN TURLI SOXALARNI O’RGANING
        </p>
        <CardWrapper>
          {courseData.map((value) => {
            return (
              <Card
                onClick={() => navigate(`/courses/${value.id}`)}
                key={value.id}
              >
                <img className="course-img" src={value.img} alt={value.title} />
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
