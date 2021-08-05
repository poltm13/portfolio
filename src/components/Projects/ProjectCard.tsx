import { CardProps } from 'shared/CardProps';
import React from 'react';
import Utils from 'shared/Utils';

export default function ProjectCard(props: CardProps) {
  return (
    <div className="project-card" {...Utils.cursorHoverEffect()}>
      
      {props.logoSrc && <div className="project-card--logo">
        <img src={props.logoSrc} alt="" />
      </div>}

      <div className="project-card--container">
        <div className="project-card--image">
          <img src={props.imageSrc} alt="" id={props.id}/>
        </div>
        <div className="project-card--content">
          <h3 className="project-card--content--title">{props.title}</h3>
          <h3 className="project-card--content--description">{props.description}</h3>
          {props.link &&
            <a
              className="project-card--content--link"
              href={props.link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {props.link.text}
              <span>&#10230;</span>
            </a>}
          <div className="project-card--content--tags">
            {props.tags.map((tag, i) =>
              <span key={i}>{tag}</span>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}