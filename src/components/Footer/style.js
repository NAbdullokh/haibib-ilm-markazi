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
  padding: 50px 130px;
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

export const BoxWrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-bottom: 20px;
  width: 100%;
`;

export const Box = styled.div`
  flex: 1 1 15rem;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
`;

Box.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  color: #079f16;
`;

Box.Name = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
`;

export const Line = styled.div`
  width: 70%;
  border: 2px solid rgba(255, 255, 255, 0.2);
  margin: auto;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: 11px;
    text-align: left;
  }
`;

export const SocialIcon = styled.div`
  display: flex;
  padding: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  gap: 55%;
  @media (max-width: 480px) {
    gap: 30%;
  }
`;

export const SocialWrapper = styled.div`
  transform: scale(2);
  transition: 0.2s;
  :hover {
    color: #009f3c;
    transform: scale(2.05);
  }
`;
