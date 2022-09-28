import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #3a796e;
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 10px 130px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  @media (max-width: 1450px) {
    padding: 10px 50px;
  }
  @media (max-width: 880px) {
    padding: 10px 20px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  justify-content: space-between;
  margin: 0 10px;
  @media (max-width: 1200px) {
    width: 100%;
    gap: 0;
    margin: 0 30px;
  }
  @media (max-width: 880px) {
    display: none;
  }
`;

ItemWrapper.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;

  @media (max-width: 1230px) {
    font-size: 14px;
  }
`;
