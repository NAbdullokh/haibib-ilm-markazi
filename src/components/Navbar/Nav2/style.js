import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #3a796e;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 10px 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  @media (max-width: 1450px) {
    padding: 10px 50px;
  }
  @media (max-width: 880px) {
    padding: 10px 20px 60px;
  }
  @media (max-width: 570px) {
    padding: 10px 20px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: space-between;
  margin: 0 10px;
  @media (max-width: 1200px) {
    width: 100%;
    gap: 0;
    margin: 0 30px;
  }
  @media (max-width: 880px) {
    position: absolute;
    width: 90%;
    left: 0;
    top: 110px;
  }
  @media (max-width: 570px) {
    display: none;
  }
`;

export const BtnWrapper = styled.div`
  @media (max-width: 570px) {
    display: none;
  }
`;
