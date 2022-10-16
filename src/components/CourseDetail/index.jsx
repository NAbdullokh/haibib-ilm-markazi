import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { courseData } from "../../mock/courses";
import {
  CardWrapper,
  Container,
  Header,
  HeaderWrapper,
  Wrapper,
} from "./style";

const CourseDetails = () => {
  const { id } = useParams();
  const [name, setName] = useState();

  return (
    <Wrapper>
      <Container>
        <HeaderWrapper>
          <Header>
            <Header.Title>{/* Asosiy <span>> </span> */}</Header.Title>
            <Header.Desc>
              Qidiruv bo’yicha {courseData.length} ta o’qtuvchi topildi
            </Header.Desc>
          </Header>
          <CardWrapper></CardWrapper>
        </HeaderWrapper>
      </Container>
    </Wrapper>
  );
};

export default CourseDetails;
