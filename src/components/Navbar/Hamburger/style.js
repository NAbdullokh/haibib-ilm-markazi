import styled from "styled-components";

// RightNav
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
  }
  li {
    list-style-type: none;
  }
  @media (max-width: 570px) {
    flex-flow: column nowrap;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    z-index: 999;
    top: 13.4rem;
    left: 0;
    height: 100%;
    width: 100%;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;

    li {
      padding: 10px 28px;
      justify-content: space-around;
      align-items: center;
      text-align: start;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: #191919;
    }
  }
`;

export const Navbar = styled.div`
  display: none;
  @media (max-width: 570px) {
    display: flex;
  }
`;
export const Wrap = styled.div`
  @media (max-width: 570px) {
    align-items: center;
    border-bottom: 1px solid #f0f0f0;
  }
`;

// Burger
export const StyledBurger = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  background: #28a745;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      margin-left: ${({ open }) => (open ? "8px" : "0px")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      margin-left: ${({ open }) => (open ? "8px" : "0px")};
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
