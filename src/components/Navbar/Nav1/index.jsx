import React from "react";
import {
  Container,
  Icon,
  IconWrapper,
  Language,
  TelWrapper,
  Text,
  TwoWrapper,
  Wrapper,
} from "./style";
import gmail from "../../../assets/icon/email.svg";
import location from "../../../assets/icon/location.svg";
import dot from "../../../assets/icon/dot.svg";
import phone from "../../../assets/icon/phone.svg";

const Nav1 = () => {
  return (
    <Wrapper>
      <Container>
        <TwoWrapper>
          <IconWrapper>
            <Icon src={gmail} alt="" />
            <Text>habibilmmarkazi@gmail.com</Text>
          </IconWrapper>

          <IconWrapper>
            <Icon src={location} alt="" />
            <Text>Toshkent shaxar, Olmazor tumani, Langar 68</Text>
          </IconWrapper>
        </TwoWrapper>

        <TelWrapper>
          <TelWrapper.Text>
            <Icon src={dot} alt="" />
            O’zingizga qulay vaqtda qo’ng’iroq qiling
          </TelWrapper.Text>
          <IconWrapper>
            <Icon src={phone} alt="" />
            <div className="flex">
              <Text>+998 (95) 506 66 69</Text>
              <Text>+998 (93) 666 66 73</Text>
            </div>
          </IconWrapper>
        </TelWrapper>
        <Language>
          <Language.Text>UZ</Language.Text>
          <p style={{ color: "white" }}>|</p>
          <Language.Text>RU</Language.Text>
          <p style={{ color: "white" }}>|</p>
          <Language.Text>EN</Language.Text>
          <p style={{ color: "white" }}>|</p>
          <Language.Text>AR</Language.Text>
        </Language>
      </Container>
    </Wrapper>
  );
};

export default Nav1;
