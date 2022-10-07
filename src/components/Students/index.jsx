import React from "react";
import {
  CardWrapper,
  Card,
  Container,
  Wrapper,
  FooterComponent,
} from "./style";
import students from "../../assets/icon/students.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../generic/Button";
import "swiper/css";
import { studentData } from "../../mock/studentData";

const Students = () => {
  return (
    <Wrapper>
      <Container>
        <div className="titleWrap">
          <div className="line"></div>
          <Container.Img src={students} alt="question" />
          <div className="line"></div>
        </div>
        <p className="title">O’QUVCHILARIMIZNING NATIJALARI</p>
        <CardWrapper>
          <Swiper spaceBetween={50} slidesPerView={3}>
            {studentData.map((value) => {
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
      <FooterComponent>
        <div className="flex">
          <div className="desc">BIZGA QO’SHILING</div>
          <div className="subTitle">Hoziroq ro’yxatdan o’ting</div>
        </div>
        <Button height={"50px"} type={"footer"} width={"250px"}>
          BOG’LANISH
        </Button>
      </FooterComponent>
    </Wrapper>
  );
};

export default Students;
