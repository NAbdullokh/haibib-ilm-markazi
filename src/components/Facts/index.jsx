import React from "react";
import { Card, CardWrapper, Container, Wrapper } from "./style";
import target from "../../assets/img/target.png";
import { factsData } from "../../mock/facts";

const Facts = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={target} alt="target" />
          <div className="line"></div>
        </div>
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
