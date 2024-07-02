import React, { useContext } from "react";
import { DarkModeContext } from "../DarkModeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from "./ToggleButton";
import faMoonBckgrd from "../assets/lightBckgrdImg.webp";
import faSunBckgrd from "../assets/darkBckgrdImg.webp";
import "../styles/darkmode.scss";
import "../styles/switch.scss";

export default function DarkModeToggleButton() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <ToggleButton
      isToggled={darkMode}
      onToggle={toggleDarkMode}
      ToggledIcon={() => <FontAwesomeIcon icon={faMoon} />}
      UntoggledIcon={() => <FontAwesomeIcon icon={faSun} />}
      backgroundImages={{ toggled: faSunBckgrd, untoggled: faMoonBckgrd }} // Pas de background spécifique pour le mode sombre
      altText={darkMode ? "Moon Icon" : "Sun Icon"}
      additionalClass="darkmode-toggle"
    />
  );
}





