import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
`;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  margin-top: 15px;
`;

Container.Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

export const Icon = styled.img`
  width: 20px;
  transition: 0.2s;
`;

export const Card = styled.div`
  display: flex;
  transition: 0.2s;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 0 50px 20px 0;
  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
  &:hover ${Icon} {
    transform: translateX(5px);
  }
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
