import React from "react";
import { Outlet } from "react-router-dom";
import Nav1 from "./Nav1";
import Nav2 from "./Nav2";
import { Wrapper } from "./style";

const Navbar = () => {
  return (
    <Wrapper>
      <Nav1 />
      <Nav2 />
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;
