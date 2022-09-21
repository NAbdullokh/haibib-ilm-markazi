import { Carousel } from "antd";
import React from "react";
import { carouselData } from "../../mock/carousel";
import { BtnWrapper, Container, EachCarousel, Img, Text } from "./style";
import Button from "../../generic/Button";

const Slider = () => (
  <Container>
    <Carousel autoplay>
      {carouselData.map((value) => {
        return (
          <EachCarousel key={value.id}>
            <Img src={value.img} />
            <Text>{value.title}</Text>
            <BtnWrapper>
              <Button width="220px" height="70px">
                Batafsil
              </Button>
            </BtnWrapper>
          </EachCarousel>
        );
      })}
    </Carousel>
  </Container>
);

export default Slider;
