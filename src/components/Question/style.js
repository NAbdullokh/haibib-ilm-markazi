import styled from "styled-components";
import { Collapse } from "antd";

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
  padding: 25px 130px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

Container.Img = styled.img``;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #ffffff;
  margin-top: 20px;
`;

export const CollapseStyle = styled(Collapse)``;
