import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Button = styled.button`
    width: fit-content;
    background-color: #F2F5F8;
    align-self: center;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        scale: 1.2;
        background-color: #4782F0;
        color: white;
        font-weight: bold;
    }
    @media (max-width: 445px){
        font-size: 2.7vw;
    }
    @media (max-width: 375px){
        font-size: 3vw;
    }
`;


export default function ModalButton({ title, description, descriptionOvl, skills }) {
    const [showModal, setShowModal] = useState(false);

    const { t } = useTranslation();

    return (
        <>
            <Button onClick={() => setShowModal(true)}>
                {t("modal_button")}
            </Button>
            {showModal && 
                createPortal(
                    <ModalContent 
                        closeModal={() => setShowModal(false)}
                        title={title}
                        description={description}
                        descriptionOvl={descriptionOvl}
                        skills={skills}
                    />, 
                    document.body
                )}
        </>
    );
}
