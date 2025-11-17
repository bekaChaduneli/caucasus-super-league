import { en, ka, az, am } from "../messages";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en,
  ka,
  az,
  am,
};

const defaultLanguage = localStorage.getItem("i18nextLng") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLanguage,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
