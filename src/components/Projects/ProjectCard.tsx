import { CardProps } from 'shared/CardProps';
import React from 'react';

export default function ProjectCard({title, description, tags, imageSrc, logoSrc}: CardProps) {
  return (
    <div className="project-card">
      
      {logoSrc && <div className="project-card--logo">
        <img src={logoSrc} alt="" />
      </div>}

      <div className="project-card--container">
        <div className="project-card--image">
          <img src={imageSrc} alt="" />
        </div>
        <div className="project-card--content">
          <h3 className="project-card--content--title">{title}</h3>
          <h3 className="project-card--content--description">{description}</h3>
          <div className="project-card--content--tags">
            {tags.map((tag, i) =>
              <span key={i}>{tag}</span>
            )}
          </div>
        </div>
      </div>

    </div>
  );
}