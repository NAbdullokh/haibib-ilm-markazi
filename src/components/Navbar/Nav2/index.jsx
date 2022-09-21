import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/icon/logo.svg";
import Button from "../../../generic/Button";
import { navbarItem } from "../../../utils/navbarItems";
import { Container, ItemWrapper } from "./style";

const Nav2 = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <img onClick={() => navigate("/")} src={logo} alt="" />
      <ItemWrapper>
        {navbarItem.map((value) => {
          return (
            <ItemWrapper.Item href={value.to}>{value.title}</ItemWrapper.Item>
          );
        })}
      </ItemWrapper>
      <a href="#login">
        <Button width="200px" height="80px">
          Ariza Topshirish
        </Button>
      </a>
    </Container>
  );
};

export default Nav2;
