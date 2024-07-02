import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjetCards';
import '../styles/projectGallery.scss';
import '../styles/projetCards.scss';
import { useTranslatedProjects } from './projects';

function ProjectGallery() {
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth <= 1200);
  const projects = useTranslatedProjects();

  useEffect(() => {
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth <= 1200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projectImagesSlide1 = projects.slice(0, 2);
  const projectImagesSlide2 = projects.slice(2, 4);

  const duplicatedProjectsSlide1 = [...projectImagesSlide1, ...projectImagesSlide1];
  const duplicatedProjectsSlide2 = [...projectImagesSlide2, ...projectImagesSlide2];

  return (
    <div className={`project-gallery`}>
      {isNarrowScreen ? (
        <div className="slideX-container">
          <div className='projects-slide slideX'>
            {projects.map((project, index) => (
              <ProjectCard key={index} image={project.image} title={project.title} description={project.description} descriptionOvl={project.descriptionOvl} skills={project.skills} />
            ))}
          </div>
          <div className='projects-slide slideX'>
            {projects.map((project, index) => (
              <ProjectCard key={index + projects.length} image={project.image} title={project.title} description={project.description} descriptionOvl={project.descriptionOvl} skills={project.skills} />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className='projects-slide slide1'>
            {duplicatedProjectsSlide1.map((project, index) => (
              <ProjectCard key={index} image={project.image} title={project.title} description={project.description} descriptionOvl={project.descriptionOvl} skills={project.skills} />
            ))}
          </div>
          <div className='projects-slide slide2'>
            {duplicatedProjectsSlide2.map((project, index) => (
              <ProjectCard key={index + duplicatedProjectsSlide1.length} image={project.image} title={project.title} description={project.description} descriptionOvl={project.descriptionOvl} skills={project.skills} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectGallery;
