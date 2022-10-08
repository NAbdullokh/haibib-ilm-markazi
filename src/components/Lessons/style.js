import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #242c41;
`;

export const Container = styled.div`
  width: 100%;
  padding: 25px 130px;
  margin: auto;
  max-width: var(--maxWidth);
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1450px) {
    padding: 25px 50px;
  }
  @media (max-width: 400px) {
    padding: 25px 20px;
  }
`;

Container.Img = styled.img``;

export const VideWrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  margin: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: white;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
`;

export const BtnWrap = styled.a`
  width: 150px;
`;
