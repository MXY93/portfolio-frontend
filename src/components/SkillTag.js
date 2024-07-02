import React from 'react';
import '../styles/skillTag.scss'

export default function SkillTag({ skills }) {
    return (
        <div className="skill-tag--row">
            {skills.map((skill, index) => (
                <p key={index} style={{ backgroundColor: skill.backgroundColor, border: `3px solid ${skill.border}`, color: skill.color }}>
                    {skill.name}
                </p>
            ))}
        </div>
    );
}