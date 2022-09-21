import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const EachCarousel = styled.div`
  width: 100%;
  height: 82vh;
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: brightness(40%);
  @media (max-width: 650px) {
    position: relative;
  }
`;

export const Text = styled.p`
  position: absolute;
  top: 30%;
  left: 130px;
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #27512b;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  top: 47%;
  left: 130px;
`;
