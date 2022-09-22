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
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
`;

Container.Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

Container.Img = styled.img``;

Container.Line = styled.div`
  width: 100px;
  height: 6px;
  background-color: #009f3c;
`;

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
`;
