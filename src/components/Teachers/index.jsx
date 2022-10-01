import React from "react";
import { Card, CardWrapper, Container, Wrapper } from "./style";
import document from "../../assets/icon/document.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { teacherData } from "../../mock/teacherData";
import Button from "../../generic/Button";

const Teachers = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
        <CardWrapper>
          <Slider {...settings}>
            {teacherData.map((value) => {
              return (
                <Card>
                  <img src={value.img} alt={value.name} />
                  <Card.Name>{value.name}</Card.Name>
                  <Card.Course>{value.course}</Card.Course>
                  <Button>Batafsil</Button>
                </Card>
              );
            })}
          </Slider>
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Teachers;
