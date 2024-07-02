import React from 'react';
import TiltCard from "./TiltCards";
import '../styles/projectTiltCards.scss';
import { useTranslatedProjects } from './projects';

const ProjectTiltCards = () => {
  const projects = useTranslatedProjects();

  return (
    <div className="projects--tilt-cards--container">
      {projects.map((project, index) => (
        <TiltCard
          key={index}
          image={project.image}
          altText={project.altText}
          title={project.title}
          description={project.description}
          descriptionOvl={project.descriptionOvl}
          skills={project.skills}
          repoUrl={project.repoUrl}
        />
      ))}
    </div>
  );
};

export default ProjectTiltCards;
