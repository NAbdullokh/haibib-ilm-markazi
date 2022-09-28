import { Carousel } from "antd";
import React from "react";
import { carouselData } from "../../mock/carousel";
import {
  BtnWrapper,
  Container,
  EachCarousel,
  Img,
  TextWrapper,
  Title,
} from "./style";
import Button from "../../generic/Button";

const Slider = () => (
  <Container id="main">
    <Carousel autoplay>
      {carouselData.map((value) => {
        return (
          <EachCarousel key={value.id}>
            {/* <Img src={value.img} /> */}
            <TextWrapper>
              <Title>{value.title}</Title>
              <BtnWrapper>
                <Button width="220px" height="70px">
                  Batafsil
                </Button>
              </BtnWrapper>
            </TextWrapper>
          </EachCarousel>
        );
      })}
    </Carousel>
  </Container>
);

export default Slider;
