import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 11vh;
  padding: 10px 130px;
  background-color: #3a796e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

ItemWrapper.Item = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 1px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  text-decoration: underline;
`;
