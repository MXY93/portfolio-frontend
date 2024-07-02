import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/footer.scss';
import logo from '../assets/portfolio-logo.webp';

export default function Footer() {

    const { t } = useTranslation();

    return (
    <footer>
        <img src={logo} loading="lazy" alt="logo" />
        <p>© 2024 Maxime Videau Penez.<br /> {t("footer_text")}</p>
    </footer>
    );
} 