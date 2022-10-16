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
  padding: 25px 130px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Container.Img = styled.img``;

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const Box1 = styled.div`
  flex: 1;
`;

Box1.Head = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  span {
    font-weight: 700;
  }
`;

export const Box2 = styled.div`
  flex: 1;
`;
