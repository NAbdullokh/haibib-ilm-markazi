import React from "react";
import { Container, Wrapper, CollapseStyle } from "./style";
import question from "../../assets/img/question.png";
import { questionData } from "../../mock/question";

const { Panel } = CollapseStyle;

const Question = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={question} alt="question" />
          <div className="line"></div>
        </div>
        <Container.Title>Ko’p beriladigan savollar</Container.Title>
        <CollapseStyle defaultActiveKey={["1"]} onChange={onChange}>
          {questionData.map((value) => {
            return (
              <Panel header={<div>{value.title}</div>} key={value.id}>
                <p>{value.item}</p>
              </Panel>
            );
          })}
        </CollapseStyle>
      </Container>
    </Wrapper>
  );
};

export default Question;
