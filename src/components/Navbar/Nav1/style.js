import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #242c42;
`;

export const Container = styled.div`
  width: 100%;
  padding: 10px 130px;
  max-width: var(--maxWidth);
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1450px) {
    padding: 10px 50px;
  }
  @media (max-width: 880px) {
    padding: 10px 20px;
  }
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
`;

export const TelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

TelWrapper.Text = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  gap: 5px;
`;

export const Language = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

Language.Text = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
`;

export const Icon = styled.img``;
