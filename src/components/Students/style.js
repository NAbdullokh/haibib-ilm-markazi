import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #242c41;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: auto;
  padding: 25px 130px;
  display: flex;
  flex-direction: column;
`;

Container.Img = styled.img`x`;

export const CardWrapper = styled.div`
  margin-top: 25px;
  display: flex;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px 30px;
  background-color: white;
`;

Card.Name = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;

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

export const FooterComponent = styled.div`
  width: 100%;
  margin-top: 20px;
  background: #28a745;
  padding: 20px 160px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 850px) {
    display: none;
  }
`;
