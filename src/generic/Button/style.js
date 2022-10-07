import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "primary":
      return {
        borderRadius: "0px",
        background: " #28A745",
        color: "#ffffff",
      };

    case "footer":
      return {
        background: "#242C42",
        color: "#ffffff",
      };
    default:
      return {
        background: " #28A745",
        color: "#ffffff",
      };
  }
};

const Container = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height || "70px"};
  min-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  border-radius: 10px;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  cursor: pointer;
  ${({ type }) => getType(type)}
  :active {
    transform: scale(0.98);
    opacity: 0.7;
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 60px;
  }
`;

export { Container };
