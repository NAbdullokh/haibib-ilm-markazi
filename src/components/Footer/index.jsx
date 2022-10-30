import React from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
  BoxWrapper,
  Container,
  IconWrapper,
  Line,
  SocialIcon,
  SocialWrapper,
  Text,
  Wrapper,
} from "./style";
import location from "../../assets/icon/location.svg";
import phone from "../../assets/icon/phone.svg";
import dot from "../../assets/icon/dot.svg";
import { TelWrapper } from "../Navbar/Nav1/style";
import { navbarItem } from "../../utils/navbarItems";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const Footer = () => {
  const [data, setData] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    axios
      .get("https://habibilmapi.pythonanywhere.com/course-details")
      .then((res) => {
        setData(res?.data?.results);
      });
  }, []);

  return (
    <>
      <Outlet />
      <Wrapper>
        <Container>
          <BoxWrapper>
            <Box type="center">
              <Box.Name>
                <q> HABIB ILM MARKAZI </q> Nodavlat ta`lim muassasasini tashkil
                etishdan maqsad markazdagi mavjud kurslarda ta`lim olishni
                istagan barchaga zamonaviy metod asosida sifatli ta`lim
                berishdan iborat.
              </Box.Name>
              <Line></Line>

              <IconWrapper>
                <img src={location} alt="" />
                <Text>Toshkent shaxar, Olmazor tumani, Langar 68</Text>
              </IconWrapper>
              <Line></Line>
              <TelWrapper>
                <TelWrapper.Text>
                  <img src={dot} alt="" />
                  O’zingizga qulay vaqtda qo’ng’iroq qiling
                </TelWrapper.Text>
                <IconWrapper>
                  <img src={phone} alt="" />
                  <div className="flex">
                    <Text>+998 (95) 506 66 69</Text>
                    <Text>+998 (93) 666 66 73</Text>
                  </div>
                </IconWrapper>
              </TelWrapper>
            </Box>

            <Box>
              <Box.Title>LINKLAR</Box.Title>
              {navbarItem.map((value) => {
                return (
                  <Box.Name
                    className="footerItem"
                    href={value.to}
                    key={value.id}
                  >
                    {value.title}
                  </Box.Name>
                );
              })}
            </Box>

            <Box>
              <Box.Title>KURSLAR</Box.Title>
              {data.slice(0, 7).map((value) => {
                return (
                  <Box.Name key={value.id} className="footerItem">
                    {value.name}
                  </Box.Name>
                );
              })}
            </Box>

            <Box>
              {data.slice(7, data.length).map((value) => {
                return (
                  <Box.Name key={value.id} className="footerItem">
                    {value.name}
                  </Box.Name>
                );
              })}
            </Box>
          </BoxWrapper>
          <Box style={{ marginTop: "40px" }}>
            <Box.Title>IJTIMOIY TARMOQLAR</Box.Title>
            <SocialIcon>
              <SocialWrapper>
                <BsTelegram />
              </SocialWrapper>
              <SocialWrapper>
                <BsInstagram />
              </SocialWrapper>
              <SocialWrapper>
                <BsYoutube />
              </SocialWrapper>
              <SocialWrapper>
                <BsFacebook />
              </SocialWrapper>
              <SocialWrapper>
                <BsTwitter />
              </SocialWrapper>
            </SocialIcon>
          </Box>
          <Line type="bottom"></Line>
          <div style={{ paddingTop: "30px" }} className="subTitle">
            © Barcha huquqlar himoyalangan, HABIB - ilm markazi 2021-{year}
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default Footer;
