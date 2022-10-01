import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #111828;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: auto;
  padding: 25px 130px;
  /* display: flex;
  flex-direction: column; */
  /* align-items: center; */
`;

Container.Img = styled.img``;

export const CardWrapper = styled.div`
  margin-top: 25px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px 30px;
  background-color: white;
`;

Card.Name = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  /* display: flex; */
  /* align-items: center; */
  /* text-align: center; */
  margin: auto;
  color: #000000;
`;

Card.Course = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #009f3c;
`;
