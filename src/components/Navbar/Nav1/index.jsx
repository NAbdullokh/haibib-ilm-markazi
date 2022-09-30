import React, { Suspense } from "react";
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
import i18 from "i18next";
import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const translationEn = { address: "Address" };
const translationUz = {
  address: "Toshkent shaxar, Olmazor tumani, Langar 68",
};
const translationRu = { address: "Адресс" };
const translationAr = { address: "arab" };

i18.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    uz: { translation: translationUz },
    ru: { translation: translationRu },
    ar: { translation: translationAr },
  },
  lang: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});
const Nav1 = () => {
  const { t } = useTranslation();

  const onChange = (e) => {
    i18next.changeLanguage(e.target.value);
  };
  return (
    <Suspense fallback="Loading..">
      <Wrapper>
        <Container>
          <TwoWrapper>
            <IconWrapper>
              <Icon src={gmail} alt="" />
              <Text>habibilmmarkazi@gmail.com</Text>
            </IconWrapper>

            <IconWrapper>
              <Icon src={location} alt="" />
              <Text>{t("address")}</Text>
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
            <div className="box">
              <select name="language" onChange={onChange}>
                <option value="uz">UZ</option>
                <option value="en">EN</option>
                <option value="ar">AR</option>
                <option value="ru">RU</option>
              </select>
            </div>
          </Language>
        </Container>
      </Wrapper>
    </Suspense>
  );
};

export default Nav1;
