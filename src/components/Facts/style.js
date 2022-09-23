import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 25px 0 52px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin: auto;
`;

Container.Img = styled.img``;

Container.MainTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #000000;
  margin-top: 25px;
`;

Container.Fact = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #f10b0b;
`;

export const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 430px;
  margin: 20px;
`;

Card.Img = styled.img`
  width: 30%;
  height: 30%;
`;

Card.Title = styled.p`
  margin-top: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;

Card.Desc = styled.p`
  margin-top: -10px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
`;
