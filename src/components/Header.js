import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.scss";
import mvp from "../assets/portfolio-logo.webp";
import { useTranslation } from 'react-i18next';
import DarkModeToggleButton from "./DarkModeToggleButton";
import LanguageToggleButton from "./LangToggleButton";
import '../styles/darkmode.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuIcon, setMenuIcon] = useState('&#9776;');
  const menuRef = useRef(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    const headerOffset = document.getElementById('header').offsetHeight;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuIcon(!isMenuOpen ? '&#9932;' : '&#9776;');
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
      setMenuIcon('&#9776;');
    }
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    setMenuIcon('&#9776;');
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const { t } = useTranslation();

  return (
    <header>
      <nav className="navbar" id="header" ref={menuRef}>
        <img className="logo" loading="lazy" src={mvp} alt="logo MVP" />
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="menu-icon" dangerouslySetInnerHTML={{ __html: menuIcon }}></span>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li className="headerLink">
            <NavLink to="/" onClick={() => { handleScroll('presentation'); handleNavLinkClick(); }}>{t("nav_links__welcome")}</NavLink>
          </li>
          <li className="headerLink">
            <NavLink to="/" onClick={() => { handleScroll('projects'); handleNavLinkClick(); }}>{t("nav_links__projects")}</NavLink>
          </li>
          <li className="headerLink">
            <NavLink to="/" onClick={() => { handleScroll('formations'); handleNavLinkClick(); }}>{t("nav_links__education")}</NavLink>
          </li>
          <li className="headerLink">
            <NavLink to="/" onClick={() => { handleScroll('contact'); handleNavLinkClick(); }}>{t("Contact")}</NavLink>
          </li>
          <li className="headerLink">
            <a href="/cv_portfolio_MV.pdf" target="_blank" rel="noopener noreferrer" onClick={handleNavLinkClick}>{t("nav_links__cv")}</a>
          </li>
        </ul>
        <div className="header-center">
          <span>Maxime <br />Videau</span>
        </div>
        <div className="headerBtns">
          <DarkModeToggleButton /> 
          <div className="langBtn">
            <LanguageToggleButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

  