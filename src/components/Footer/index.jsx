import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Outlet />
      <h1>Hello from Footer</h1>
    </div>
  );
};

export default Footer;
