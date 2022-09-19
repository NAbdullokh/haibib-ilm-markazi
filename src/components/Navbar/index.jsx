import React from "react";
import { Outlet } from "react-router-dom";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import { Container, Wrapper } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Nav1 />
        <Nav2 />
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
