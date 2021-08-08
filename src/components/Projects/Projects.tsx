import React, { useEffect } from 'react';
import { animated, config, useSpring, useTrail } from 'react-spring';

import { CardProps } from 'shared/interfaces/CardProps';
import ProjectCard from './ProjectCard';
import Utils from 'shared/Utils';
import { _Projects } from 'assets/index';
import useElementOnScreen from 'shared/useElementOnScreen';

export default function Projects() {

  const [ containerRef, isVisible ] = useElementOnScreen({ threshold: 0.7 });

  const props = useSpring({ 
    x: isVisible ? 0 : -200, 
    opacity: isVisible ? 1 : -0.3,
    config: config.molasses
  });

  const [trail, api] = useTrail(projects.length, () => ({scale: 0}));

  useEffect(() => {
    api.start({scale: isVisible ? 1 : 0});
    Utils.toggleClass('.projects-blob-container > div', 'visible', isVisible as boolean);
  }, [isVisible]);

  return (
    <section ref={containerRef as React.MutableRefObject<any>}>
      <div className="projects" >
        <animated.h1 style={props}>Projects</animated.h1>
        <div className="projects--cards-container">
          {trail.map((styles, i) =>
            <animated.div key={i} style={styles}>              
              <ProjectCard {...projects[i]}/>
            </animated.div>
          )}
        </div>
      </div>
    </section>
  );
}

const projects: CardProps[] = [
  {
    title: 'SEMTE',
    description: 'A website for a local air conditioning company.',
    tags: ['React/Gatsby', 'SASS'],
    imageSrc: _Projects.semte, 
    logoSrc: _Projects.semteLogo,
    link: {text: 'Site', url: 'https://semte.es'},
    id: 'semte' 
  },
  {
    title: 'LabelsRoom',
    description: 'I collaborated in the creation and styiling of the B2B eCommerce part of the website.',
    tags: ['WordPress', 'CSS'],
    imageSrc: _Projects.labelsRoom, 
    logoSrc: _Projects.labelsRoomLogo,
    link: {text: 'Site', url: 'https://labelsroom.com'},
    id: 'labels'  
  },
  {
    title: 'HappyBday',
    description: 'A geeky website for my girlfriend’s 24th birthday with a bunch of images of us.',
    tags: ['React', 'p5.js', 'SASS'],
    imageSrc: _Projects.clauBday, 
    logoSrc: _Projects.clauBdayLogo,
    id: 'bday' 
  },
  {
    title: 'Space invaders',
    description: 'A game built in python for a college subject.',
    tags: ['Python', 'p5'],
    imageSrc: _Projects.invaders, 
    logoSrc: _Projects.invadersLogo,
    link: {text: 'Source', url: 'https://github.com/poltm13/space-invaders.git'},
    id: 'invaders' 
  },
  {
    title: 'To Do List App',
    description: 'Project to learn mobile app development. This project introduced me to React.',
    tags: ['React Native', 'CSS'],
    imageSrc: _Projects.native, 
    logoSrc: _Projects.nativeLogo,
    link: {text: 'Source', url: 'https://github.com/poltm13/reactNativeTest.git'},
    id: 'todo' 
  }
];