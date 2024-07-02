import React, { useEffect } from 'react'
import styled from 'styled-components'

const OverlayDiv = styled.div `
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
`;

const ContentDiv = styled.div `
    position: fixed;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-evenly;
    z-index: 1002;
    top: 33%;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    height: 45%;
    padding: 35px 15px;
    background-color: white;
    color: #2C3E50;
    border-radius: 10px;
    overflow: scroll;
    h4 {
        font-size: 2rem;
    }
    .overlay-subtitle {
        font-size: 1.25rem;
        font-weight: 600;
    }
    p {
        font-size: 1.1rem;
    }
    .skills {
        display: flex;
        gap: 10px;
        align-self: center;
        .skill-tag {
            padding: 3px;
            font-size: 1.1rem;
            @media (max-width: 400px){
                font-size: 0.8rem;
            }
        }
    }
`;

const CloseButton = styled.button `
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    height: 1.75rem;
    width: 1.75rem;
    background-color: #2C3E50;
    color: white;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
`;


export default function ModalContent({ closeModal, title, description, descriptionOvl, skills }) {
    useEffect(() => {
        document.body.classList.add('no-scroll');

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);
  
    return (
        <>
            <OverlayDiv onClick={closeModal}></OverlayDiv>
            <ContentDiv>
                <CloseButton onClick={closeModal}>
                    X
                </CloseButton>
                <h4>{title}</h4>
                <p className='overlay-subtitle'>{description}</p>
                <p className='overlay-prg'>{descriptionOvl}</p>
                <div className="skills">
                    {skills && skills.map((skill, index) => (
                        <span 
                            key={index} 
                            className="skill-tag" 
                            style={{ backgroundColor: skill.backgroundColor, border: `3px solid ${skill.border}`, color: skill.color }}>
                            {skill.name}
                        </span>
                    ))}
                </div>
            </ContentDiv>
        </>
    );
}
