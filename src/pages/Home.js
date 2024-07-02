import React from 'react';
import Presentation from "../components/Presentation";
import ProjectGallery from "../components/ProjectGallery";
import Formations from "../components/Formations";
import Contact from "../components/Contact";
import { useContext } from "react";
import { DarkModeContext } from "../DarkModeProvider";
import ProjectTiltCards from "../components/ProjectTiltCards";
import SkillsBalls from "../components/SkillsBalls";

export default function Home() {
  const {darkMode} = useContext(DarkModeContext);
    return (
      <div className={`homepage app ${darkMode && 'dark-theme'}`}>
        <div id="presentation">
          <Presentation />
        </div>
        <div id="projects" className="homepage-projects">
          <ProjectGallery />
          <ProjectTiltCards />
        </div>
        <hr />
        <div id="formations">
          <Formations />
        </div>
        <hr />
        <div id="skills">
          <SkillsBalls />
        </div>
        <hr />
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }