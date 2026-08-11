import React from 'react';
import ProjectCard from './ProjectCard';

export default function BrowserMockup(props) {
  // Pass through props to ProjectCard for unified design
  const projectAdapter = {
    name: props.title || 'Project',
    url: props.url || 'https://nexvix.com',
    categoryTag: props.industryTag || 'Web App',
    description: props.description || '',
    image: props.imageSrc,
    isFlagship: props.isFlagship || false,
    fullDetails: props.fullDetails || ''
  };

  return <ProjectCard project={projectAdapter} onCardClick={props.onCardClick} />;
}
