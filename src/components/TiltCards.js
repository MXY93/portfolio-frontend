import React from 'react';
import { Tilt } from "react-tilt";
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SkillTag from "./SkillTag";
import '../styles/tiltCards.scss';

const defaultOptions = {
	reverse: false,
	max: 35,
	perspective: 1000,
	scale: 1.1,
	speed: 1000,
	transition: true,
	axis: null,
	reset: true,
	easing: "cubic-bezier(.03,.98,.52,.99)",
}

export default function TiltCard({ image, altText, title, description, skills, repoUrl }) {

    const { t } = useTranslation();

    const handleGithubClick = () => {
        window.open(repoUrl, "_blank");
    };

    return (
        <Tilt options={defaultOptions} className="projects--tilt-card">
            <div className="projects---tilt-card--img-n-icon">
                <img src={image} loading="lazy" alt={altText} />
                <FontAwesomeIcon icon={faGithub} size="xl" className="faGithub" onClick={handleGithubClick} />
                <div className="hover-text">{t("tilt_card__ovrly")}</div>
            </div>
            <div className="projects---tilt-card--content">
                <div className="projects---tilt-card--title-n-prg">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <SkillTag skills={skills} />
            </div>
        </Tilt>
    );
}