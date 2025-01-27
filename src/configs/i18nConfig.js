import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../configs/locales/en/translation";
import translationRU from "../configs/locales/ru/translation";
import translationUZ from "../configs/locales/uz/translation";
import EnglishFlag from "../assets/images/icons/usa.svg";
import RusFlag from "../assets/images/icons/rus.svg";
import UzbFlag from "../assets/images/icons/uzb.svg";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  uz: {
    translation: translationUZ,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    keySeparator: "^",
    nsSeparator: "~",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export const languageMenu = [
  {
    id: "2987bf89-0a39-4005-b75d-b612526bbd79",
    icon: EnglishFlag,
    title: "ENG",
    code: "en",
  },
  {
    id: "8acc7d82-d909-4232-b40e-400e8875c271",
    icon: RusFlag,
    title: "RUS",
    code: "ru",
  },
  // {
  //   id: "8acc7d82-d909-4232-b40e-400e8875c222",
  //   icon: UzbFlag,
  //   title: "UZB",
  //   code: "uz",
  // },
];

export default i18n;
