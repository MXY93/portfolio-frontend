import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Profile from './Profile';
import ButtonTap from './ButtonTap';
import skillIcon from "../assets/SkillThree.webp";
import laptopTyper from '../assets/presentation-laptop.webp'
import "../styles/presentation.scss"

export default function Presentation () {
    const { t } = useTranslation();

    const jobTitle = t('job_title');

    const [typedText] = useTypewriter({
        words: [jobTitle],
        loop: false,
        deleteSpeed: 100,
    });

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

    return (
        <div className="presentation-container" >
            <div className="presentation-container---scene--titles--profile-n-links">
                <div>
                    <img src={laptopTyper} loading="lazy" alt="Man typing on a computer" className='laptopTyper' />
                </div>
                <section className="presentation-container--titles"> 
                    <h1>Maxime Videau Penez</h1>
                    <h2>
                        <Cursor cursorStyle='<' />&nbsp;
                        {typedText}&nbsp;
                        <Cursor cursorStyle='/>' />
                    </h2>
                </section>
                <section className="presentation-container---profile-pic--n--links">
                    <div className="presentation-container--profile-pic">
                        <Profile />
                    </div>
                    <div className="presentation-container--links"> 
                        <a href="https://github.com/MXY93" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/maximevideau/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                        </a>
                    </div>
                </section>
            </div>
            <div className="presentation-container---prg--btn">
                <p>
                    <Trans i18nKey="intro_text" components={{ 1: <span />, 2: <span /> }}>
                        Entré dans le monde de la <span>Tech</span> depuis fin 2023, 
                        je ne cesse de m’épanouir dans l’apprentissage de ces nouvelles <span>compétences</span> qui me permettent de construire des projets innovants. 
                        Passionné par le développement web, mon objectif à long terme serait de mener des projets de grandes envergures ayant un réel impact sociétal ou environnemental.
                    </Trans>
                </p>
                <ButtonTap imgSrc={skillIcon} loading="lazy" alt="skill" text={t("button_skills")} onClick={() => handleScroll('skills')} />
            </div>           
        </div>
    );
}