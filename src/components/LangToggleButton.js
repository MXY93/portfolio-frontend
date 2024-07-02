import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import frFlag from "../assets/frFlag.webp";
import angFlag from "../assets/angFlag.webp";
import frBackground from "../assets/fondFr.webp";
import angBackground from "../assets/fondAng.webp";
import ToggleButton from "./ToggleButton";
import "../styles/switch.scss";

export default function LanguageToggleButton() {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === "en");

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
    setIsEnglish(!isEnglish);
  };

  return (
    <ToggleButton
      isToggled={isEnglish}
      onToggle={toggleLanguage}
      ToggledIcon={() => <img src={angFlag} alt="English Flag" />}
      UntoggledIcon={() => <img src={frFlag} alt="French Flag" />}
      backgroundImages={{ toggled: angBackground, untoggled: frBackground }}
      altText={isEnglish ? "English Flag" : "French Flag"}
    />
  );
}











