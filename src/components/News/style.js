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

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-top: 25px;
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

Box1.Img = styled.img`
  width: 100%;
  /* height: 100%; */
`;

export const Box2 = styled.div`
  flex: 1;
  padding-left: 21px;
`;

Box2.Text = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: ${({ type }) => (type == "title" ? "center" : "start")};
  color: #ffffff;
`;

export const BtnWrapper = styled.div`
  width: 200px;
  margin-left: auto;
  height: 50px;
`;
