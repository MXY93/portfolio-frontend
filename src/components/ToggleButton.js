import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/switch.scss";

export default function ToggleButton({
  isToggled,
  onToggle,
  ToggledIcon,
  UntoggledIcon,
  backgroundImages,
  additionalClass,
  altText
}) {
  const [translateX, setTranslateX] = useState("2em");

  useEffect(() => {
    const calculateTranslateX = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 450) {
        const minScreenWidth = 320;
        const maxTranslateX = 2;
        const minTranslateX = 0.6;
        const scaleFactor = (screenWidth - minScreenWidth) / (450 - minScreenWidth);
        const scaledTranslateX = scaleFactor * (maxTranslateX - minTranslateX) + minTranslateX;
        setTranslateX(`${scaledTranslateX}em`);
      } else {
        setTranslateX("2em");
      }
    };

    calculateTranslateX();
    window.addEventListener("resize", calculateTranslateX);

    return () => window.removeEventListener("resize", calculateTranslateX);
  }, []);

  const { toggled, untoggled } = backgroundImages || { toggled: "", untoggled: "" };

  return (
    <div className={`switchBtn ${additionalClass}`} onClick={onToggle}>
      <div
        className="switchBtn__background"
        style={{
          backgroundImage: `url(${isToggled ? toggled : untoggled})`,
          backgroundPosition: "center center"
        }}
      ></div>
      <div
        className="switchBtn__indicator"
        style={{
          transform: isToggled ? `translateX(${translateX})` : "none"
        }}
      >
        <div className="switchBtn__icon_container">
          {isToggled ? <ToggledIcon alt={altText} /> : <UntoggledIcon alt={altText} />}
        </div>
      </div>
    </div>
  );
}

ToggleButton.propTypes = {
  isToggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  ToggledIcon: PropTypes.elementType.isRequired,
  UntoggledIcon: PropTypes.elementType.isRequired,
  backgroundImages: PropTypes.shape({
    toggled: PropTypes.string,
    untoggled: PropTypes.string
  }),
  additionalClass: PropTypes.string,
  altText: PropTypes.string.isRequired
};



