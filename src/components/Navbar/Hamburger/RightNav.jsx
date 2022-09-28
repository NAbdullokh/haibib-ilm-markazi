import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../generic/Button";
import { navbarItem } from "../../../utils/navbarItems";

import { Ul } from "./style";
export const RightNav = ({ open }) => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <Ul open={open}>
      {navbarItem.map((value) => {
        return (
          <NavLink
            onClick={() => open.fn(false)}
            key={value.id}
            to={value.path}
          >
            <a className="navbarTitle">{value.title}</a>
          </NavLink>
        );
      })}
      <Button width={"60%"}>Ariza Topshirish</Button>
    </Ul>
  );
};
export default RightNav;
