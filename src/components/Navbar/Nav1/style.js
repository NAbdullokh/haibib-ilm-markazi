import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7vh;
  background-color: #242c42;
  padding: 20px 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Text = styled.p`
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
