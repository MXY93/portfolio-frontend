import { useTranslation } from 'react-i18next';
import Booki from '../assets/projects/Booki-project.webp';
import Bluel from '../assets/projects/Bluel-project.webp';
import Kasa from '../assets/projects/Kasa-project.webp';
import Grimoire from '../assets/projects/MVG-project.webp';
import { technologies } from '../constants';

export const useTranslatedProjects = () => {
  const { t } = useTranslation();

  return [
    { 
      image: Booki, 
      altText: 'Booki Project', 
      title: 'Booki', 
      description: t('projects.booki.description'),
      descriptionOvl: t('projects.booki.descriptionOvl'),
      skills: [technologies[0], technologies[1]], 
      repoUrl: 'https://github.com/MXY93/P2_MV_Booki' 
    },
    { 
      image: Bluel, 
      altText: 'Bluel Project', 
      title: 'Sophie Bluel', 
      description: t('projects.bluel.description'),
      descriptionOvl: t('projects.bluel.descriptionOvl'),
      skills: [technologies[0], technologies[1], technologies[2]], 
      repoUrl: 'https://github.com/MXY93/P3_Sophie_Bluel' 
    },
    { 
      image: Kasa, 
      altText: 'Kasa Project', 
      title: 'Kasa', 
      description: t('projects.kasa.description'),
      descriptionOvl: t('projects.kasa.descriptionOvl'), 
      skills: [technologies[2], technologies[3], technologies[4]], 
      repoUrl: 'https://github.com/MXY93/P6-Kasa' 
    },
    { 
      image: Grimoire, 
      altText: 'Grimoire Project', 
      title: 'Mon vieux grimoire', 
      description: t('projects.grimoire.description'),
      descriptionOvl: t('projects.grimoire.descriptionOvl'), 
      skills: [technologies[5], technologies[6], technologies[7]], 
      repoUrl: 'https://github.com/MXY93/P7-Mon-Vieux-Grimoire' 
    }
  ];
};
