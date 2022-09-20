import React from "react";
import { Container, IconWrapper, TelWrapper, Text } from "./style";
import gmail from "../../../assets/icon/email.svg";
import location from "../../../assets/icon/location.svg";
import dot from "../../../assets/icon/dot.svg";
import phone from "../../../assets/icon/phone.svg";

const Nav1 = () => {
  return (
    <Container>
      <IconWrapper>
        <img src={gmail} alt="" />
        <Text>habibilmmarkazi@gmail.com</Text>
      </IconWrapper>

      <IconWrapper>
        <img src={location} alt="" />
        <Text>Toshkent shaxar, Olmazor tumani, Langar 68</Text>
      </IconWrapper>
      <TelWrapper>
        <TelWrapper.Text>
          {" "}
          <img src={dot} alt="" />
          O’zingizga qulay vaqtda qo’ng’iroq qiling
        </TelWrapper.Text>
        <IconWrapper>
          <img src={phone} alt="" />
          <div className="div">
            <Text>+998 (95) 506 66 69</Text>
            <Text>+998 (93) 666 66 73</Text>
          </div>
        </IconWrapper>
      </TelWrapper>
    </Container>
  );
};

export default Nav1;
