import React from "react";
import { Container, Wrapper } from "./style";
import target from "../../assets/img/target.png";
import clock from "../../assets/img/clock.png";
import money from "../../assets/img/money.png";
import think from "../../assets/img/think.png";
import teacher from "../../assets/img/teacher.png";
import book from "../../assets/img/book.png";
import teach from "../../assets/img/teach.png";

const Facts = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Title>
          <Container.Line></Container.Line>
          <Container.Img src={target} alt="target" />
          <Container.Line></Container.Line>
        </Container.Title>
      </Container>
    </Wrapper>
  );
};

export default Facts;
