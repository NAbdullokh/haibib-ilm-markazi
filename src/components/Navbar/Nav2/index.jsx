import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/icon/logo.svg";
import Button from "../../../generic/Button";
import { navbarItem } from "../../../utils/navbarItems";
import { Container, ItemWrapper, Wrapper } from "./style";

const Nav2 = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <img onClick={() => navigate("/")} src={logo} alt="" />
        <ItemWrapper>
          {navbarItem.map((value) => {
            return (
              <a className="navItem" key={value.id} href={value.to}>
                {value.title}
              </a>
            );
          })}
        </ItemWrapper>
        <a href="#login">
          <Button width="200px" height="80px">
            Ariza Topshirish
          </Button>
        </a>
      </Container>
    </Wrapper>
  );
};

export default Nav2;
