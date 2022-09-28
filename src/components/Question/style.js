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
  @media (max-width: 1450px) {
    padding: 25px 50px;
  }
  @media (max-width: 400px) {
    padding: 25px 20px;
  }

  .ant-collapse {
    width: 100%;
    border: none;
    background: #111828;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    border: 1px solid #eff2f7 !important;
    border-radius: 6px;
    padding: 25px 30px;
    margin: 4px 0px;
    background: #242c41;
  }
  .ant-collapse > .ant-collapse-item {
    border: none !important;
  }

  .ant-collapse-item-active {
    box-shadow: 0px 16px 20px rgba(32, 81, 137, 0.08);
  }

  .ant-collapse-content > .ant-collapse-content-box {
    padding: 25px 100px 25px 30px;
  }

  .ant-collapse-item {
    position: relative;
  }

  .ant-collapse-item::before {
    content: "+";
    background: #eff2f7;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    color: #007933;
    border-radius: 50%;
    position: absolute;
    top: 30px;
    right: 20px;
    z-index: 999;
  }

  .ant-collapse-item-active::before {
    content: "-";
  }

  .ant-collapse-item-active .text {
    color: #1d72d2;
  }

  .ant-collapse-expand-icon {
    display: none;
  }

  .ant-collapse-item-active .text {
    color: #323a56;
  }
`;

Container.Img = styled.img``;

export const CollapseStyle = styled(Collapse)`
  width: 100%;
`;

CollapseStyle.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: justify;
  color: #000000;
  width: 90%;
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const Flexing = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

Flexing.Circle = styled.div`
  background: #eff2f7;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #ff9d42;
  border-radius: 50%;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

Flexing.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #fff;
  margin-left: 20px;
  padding-right: 20px;
  @media (max-width: 1150px) {
    font-size: 18px;
  }
  @media (max-width: 900px) {
    width: 80%;
    text-align: left;
  }
  @media (max-width: 600px) {
    width: 70%;
    line-height: 20px;
    font-size: 16px;
  }
  @media (max-width: 420px) {
    width: 70%;
    line-height: 16px;
    font-size: 12px;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
`;

export const BgImg = styled.img`
  margin-top: 30px;
  width: 100%;
`;
