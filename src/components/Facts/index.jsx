import React from "react";
import { Card, CardWrapper, Container, Wrapper } from "./style";
import target from "../../assets/img/target.png";
import { factsData } from "../../mock/facts";

const Facts = () => {
  return (
    <Wrapper>
      <Container>
        <Container.Title>
          <Container.Line></Container.Line>
          <Container.Img src={target} alt="target" />
          <Container.Line></Container.Line>
        </Container.Title>
        <Container.MainTitle>
          Tajribali va malakali ustozni izlamaslikning oqibatilari
        </Container.MainTitle>
        <Container.Fact>HAQIDA 6 TA FAKT</Container.Fact>
        <CardWrapper>
          {factsData.map((value) => {
            return (
              <Card key={value.id}>
                <Card.Img src={value.img} />
                <Card.Title>{value.title}</Card.Title>
                <Card.Desc>{value.desc}</Card.Desc>
              </Card>
            );
          })}
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Facts;
