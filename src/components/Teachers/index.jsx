import React from "react";
import { Card, CardWrapper, Container, Wrapper } from "./style";
import document from "../../assets/icon/document.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { teacherData } from "../../mock/teacherData";
import Button from "../../generic/Button";
import "swiper/css";

const Teachers = () => {
  const teamSlider = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      800: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
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
          <Swiper {...teamSlider} spaceBetween={50} slidesPerView={3}>
            {teacherData.map((value) => {
              return (
                <SwiperSlide key={value.id}>
                  <Card>
                    <Card.Img src={value.img} alt={value.name} />
                    <Card.Name>{value.name}</Card.Name>
                    <Card.Course>{value.course}</Card.Course>
                    <Button>Batafsil</Button>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </CardWrapper>
      </Container>
    </Wrapper>
  );
};

export default Teachers;
