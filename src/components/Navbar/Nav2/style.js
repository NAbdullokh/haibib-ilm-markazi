import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px 130px;
  background-color: #3a796e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ItemWrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 50px;
`;

ItemWrapper.Item = styled.a`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  border-bottom: 1px solid #fff;
  :hover {
    border-bottom: 1px solid #242c42;
    color: #242c42;
  }
`;
