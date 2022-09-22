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

export const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 0 130px;
  max-width: var(--maxWidth);
  left: 0;
  right: 0;
  top: 25%;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 1450px) {
    padding: 0 50px;
  }
  @media (max-width: 880px) {
    padding: 0 20px;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  display: flex;
  align-items: center;
  /* text-align: center; */
  color: #27512b;
`;

export const BtnWrapper = styled.div``;
