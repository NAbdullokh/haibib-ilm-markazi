import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #111828;
  padding: 0 0 30px 0;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 25px 130px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1450px) {
    padding: 25px 50px;
  }
  @media (max-width: 400px) {
    padding: 25px 20px;
  }
`;

Container.Img = styled.img`
  @media (max-width: 500px) {
    width: 20%;
    height: 20%;
  }
`;

export const BoxWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 50px;
  margin: 25px 0;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
export const Box1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

Box1.Head = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
  span {
    font-weight: 700;
  }
`;

Box1.Input = styled.input`
  width: 100%;
  height: 50px;
  background: #d9d9d9;
  border-radius: 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 10px;

  color: rgba(0, 0, 0, 0.6);
`;

Box1.TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  padding-left: 10px;
  border-radius: 10px;
  background: #d9d9d9;
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  padding: 10px;
  color: rgba(0, 0, 0, 0.6);
  margin: 25px 0;
`;

export const BtnWrapper = styled.div`
  width: 400px;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Box2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 30px;
  justify-content: center;
  gap: 10px;
`;
Box2.Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const FooterCon = styled.div`
  width: 100%;
  background: #009f3c;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  padding: 25px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  @media (max-width: 600px) {
    font-size: 22px;
  }
`;
