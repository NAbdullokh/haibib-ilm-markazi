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
    padding: 20px 50px;
  }
  @media (max-width: 880px) {
    padding: 20px 20px;
  }
`;

export const TwoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 58%;
  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 14px;
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
  @media (max-width: 500px) {
    font-size: 11px;
    text-align: left;
  }
`;

export const TelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 740px) {
    display: none;
  }
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
  .box select {
    background-color: white;
    color: black;
    padding: 5px;
    width: 100%;
    height: 50px;
    font-size: 18px;
    outline: none;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }

  .box::before {
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 100%;
    text-align: center;
    font-size: 28px;
    line-height: 45px;
    background-color: rgba(255, 255, 255, 0.1);
    pointer-events: none;
  }

  .box:hover::before {
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(255, 255, 255, 0.2);
  }
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
  @media (max-width: 500px) {
    font-size: 10px;
  }
`;

export const Icon = styled.img``;
