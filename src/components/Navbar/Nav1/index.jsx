import React from "react";
import { Container, IconWrapper, Text } from "./style";
import gmail from "../../../assets/icon/email.svg";
import location from "../../../assets/icon/location.svg";

const Nav1 = () => {
  return (
    <Container>
      <IconWrapper>
        <img src={gmail} alt="" />
        <Text>habibilmmarkazi@gmail.com</Text>
      </IconWrapper>

      <IconWrapper>
        <img src={location} alt="" />
        <Text>Toshkent shaxar, Olmazor tumani, Langar 68</Text>
      </IconWrapper>
    </Container>
  );
};

export default Nav1;
