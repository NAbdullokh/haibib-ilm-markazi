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
  padding: 30px 130px;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 1450px) {
    padding: 25px 50px;
  }
  @media (max-width: 400px) {
    padding: 25px 20px;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Box1 = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding-right: 30px;
`;

Box1.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  display: flex;
  align-items: center;
  color: #ffffff;
`;

Box1.Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  text-align: justify;
  color: #ffffff;
`;

export const Box2 = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
