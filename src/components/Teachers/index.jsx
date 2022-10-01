import React from "react";
import { Container, Wrapper } from "./style";
import document from "../../assets/icon/document.svg";

const Teachers = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={document} alt="question" />
          <div className="line"></div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Teachers;
