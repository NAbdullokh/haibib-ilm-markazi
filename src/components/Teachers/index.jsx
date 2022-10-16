import React from "react";
import { Card, CardWrapper, Container, Wrapper } from "./style";
import document from "../../assets/icon/document.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { teacherData } from "../../mock/teacherData";
import Button from "../../generic/Button";
import "swiper/css";

const Teachers = () => {
  // const responsive = {
  //   500: {
  //     slidesPerView: 1
  //   }
  //   1000: {
  //     slidesPerView: 2
  //   }
  //   1200: {
  //     slidesPerView:4
  //   }

  // }
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
          <Swiper spaceBetween={50} slidesPerView={3}>
            {teacherData.map((value) => {
              return (
                <SwiperSlide key={value.id}>
                  <Card>
                    <img src={value.img} alt={value.name} />
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
