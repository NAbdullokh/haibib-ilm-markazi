import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: auto;
  padding: 25px 130px;
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

export const Icon = styled.img`
  width: 20px;
  transition: 0.2s;
`;

export const CardWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 5%;
`;

export const Card = styled.div`
  display: flex;
  transition: 0.2s;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  &:hover ${Icon} {
    transform: translateX(5px);
  }
`;

Card.Img = styled.img`
  width: 100%;
  height: 100%;
`;

Card.Title = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  gap: 8px;
`;
