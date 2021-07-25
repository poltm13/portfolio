import { Col, Row } from 'react-bootstrap';
import { animated, config, useSpring } from 'react-spring';

import { CardProps } from 'shared/CardProps';
import ProjectCard from './ProjectCard';
import React from 'react';
import { _Projects } from 'assets/index';
import useElementOnScreen from 'shared/useElementOnScreen';

// TODO: Move to assets
const projects: CardProps[] = [
  {
    title: 'SEMTE',
    description: 'A website for a local air conditioning company',
    tags: ['React/Gatsby', 'SASS'],
    imageSrc: _Projects.semte, 
    logoSrc: _Projects.semteLogo 
  },
  {
    title: 'HappyBday',
    description: 'A geeky website for my girlfriend’s 24th birthday with a bunch of images of us',
    tags: ['React', 'p5.js', 'SASS'],
    imageSrc: _Projects.clauBday, 
    logoSrc: _Projects.semteLogo 
  },
  {
    title: 'LabelsRoom',
    description: 'I collaborated in the creation of the B2B (business to business) eCommerce part of the website and the styiling of it.',
    tags: ['WordPress', 'CSS'],
    imageSrc: _Projects.labelsRoom, 
    logoSrc: _Projects.semteLogo 
  },
  {
    title: 'LabelsRoom',
    description: 'I collaborated in the creation of the B2B (business to business) eCommerce part of the website and the styiling of it.',
    tags: ['WordPress', 'CSS'],
    imageSrc: _Projects.labelsRoom, 
    logoSrc: _Projects.semteLogo 
  },
  {
    title: 'LabelsRoom',
    description: 'I collaborated in the creation of the B2B (business to business) eCommerce part of the website and the styiling of it.',
    tags: ['WordPress', 'CSS'],
    imageSrc: _Projects.labelsRoom, 
    logoSrc: _Projects.semteLogo 
  },
  {
    title: 'HappyBday',
    description: 'A geeky website for my girlfriend’s 24th birthday with a bunch of images of us',
    tags: ['React', 'p5.js', 'SASS'],
    imageSrc: _Projects.clauBday, 
    logoSrc: _Projects.semteLogo 
  }
];


export default function Projects() {

  const [ containerRef, isVisible ] = useElementOnScreen({ threshold: 0.5 });

  const props = useSpring({ 
    x: isVisible ? 0 : -200, 
    opacity: isVisible ? 1 : -0.3,
    config: config.molasses 
  });

  return (
    <div ref={containerRef as React.MutableRefObject<any>}>
      <animated.div className="projects" style={props}>
        <h1>Projects</h1>
        <div>
          {projects.map((project, i) =>
            <ProjectCard key={i} {...project}/>
          )}
        </div>
      </animated.div>
    </div>
  );
}