import styled from "styled-components";
import bg from "../../assets/img/background.png";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${bg});
`;

export const Container = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 25px 130px;
`;

Container.Img = styled.img``;

Container.Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

Container.Desc = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

export const CounterWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  /* gap: 120px; */
  flex-wrap: wrap;
`;

export const EachWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

CounterWrap.Number = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 110px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;

CounterWrap.Teacher = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
`;
