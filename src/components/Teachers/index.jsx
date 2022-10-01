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
        <p className="title">BIZNING USTOZLARIMIZ</p>
        <p className="desc">BIZNING FAXRIMIZ</p>
      </Container>
    </Wrapper>
  );
};

export default Teachers;
