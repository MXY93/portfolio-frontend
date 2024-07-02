import React, { useState, useEffect } from 'react';
import ModalButton from './ModalButton';
import ModalContent from './ModalContent';
import '../styles/projetCards.scss';
import '../styles/projectGallery.scss';

function ProjectCard({ image, title, description, descriptionOvl, skills = [] }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="project-card">
        <div className="project-card-content">
          <img src={image} loading="lazy" alt="Project screenshot" className="project-image" />
          <div className="overlay">
            {isMobile ? (
              <ModalButton 
                onClick={openModal} 
                title={title}
                description={description}
                descriptionOvl={descriptionOvl}
                skills={skills} 
              />
            ) : (
              <>
                <h4>{title}</h4>
                <p className='overlay-subtitle'>{description}</p>
                <p className='overlay-prg'>{descriptionOvl}</p>
                <div className="skills">
                  {skills.map((skill, index) => (
                    <span 
                      key={index} 
                      className="skill-tag" 
                      style={{ backgroundColor: skill.backgroundColor, border: `3px solid ${skill.border}`, color: skill.color }}>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {isModalOpen && (
        <ModalContent 
          closeModal={closeModal} 
          title={title}
          description={description}
          descriptionOvl={descriptionOvl}
          skills={skills}
        />
      )}
    </>
  );
}

export default ProjectCard;
