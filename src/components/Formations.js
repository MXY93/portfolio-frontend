import React from 'react';
import { Tilt } from 'react-tilt';
import OC from '../assets/OC.webp';
import '../styles/formations.scss';
import { technologies } from '../constants';
import { useTranslation, Trans } from 'react-i18next';

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Formations() {

	const { t } = useTranslation();

    return (
        <div className='formation--container'>
			<h2>{t("section_title__education")}</h2>
            <Tilt options={defaultOptions} className="formation--card" >
				<div className='formation--img-n-skills' >
					<img src={OC} loading="lazy" alt="Hello" />
					<div className='formation--skills'>
						{technologies.map((tech, index) => (
							<img key={index} src={tech.icon} loading="lazy" alt={tech.name} title={tech.name} />
						))}
					</div>
				</div>
                <div className='formation--content' >
                    <h3>
                        <span className="colored-letter">O</span>penClassrooms - <span className="date"><Trans i18nKey="education.date" /></span>
                        <br/>
                        <span className="subtitle"><Trans i18nKey="education.type" /></span>
                    </h3>
                    <p>
						<Trans i18nKey="education.content" />
					</p>
                </div>
                
            </Tilt>
        </div>
    );
}