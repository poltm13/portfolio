import { ParallaxLayer } from '@react-spring/parallax';
import React from 'react';

export default function Background() {
  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="20" />
          <feColorMatrix
            in="blur"
            //      R G B a offset
            values="1 0 0 0 0   
                    0 1 0 0 0 
                    0 0 1 0 0 
                    0 0 0 100 -16"
          />
        </filter>
      </svg>
      <div className="backgroundBlobs">
        {Blobs.map((blob, i) =>
          <ParallaxLayer 
            key={i} 
            offset={blob.offset}
            speed={blob.speed}>
            <div 
              className={'bg-blob ' + (blob.class ? blob.class : '')}
              style={blob.style}>              
            </div>
          </ParallaxLayer>  
        )}

        <ParallaxLayer offset={2} speed={0} className="projects-blob-container">
          <div>
            <div className="bg-blob move-y"></div>
            <div className="bg-blob move-x"></div>
            <div className="bg-blob move-x"></div>
            <div className="bg-blob move-y"></div>
            <div className="bg-blob move-x"></div>
            <div className="bg-blob move-x"></div>
          </div>
        </ParallaxLayer>
      </div>
    </>
  );
}

const Blobs: BackgroundBlob[] = [
  {
    offset: 0,
    speed: 0.4,
    style: {width: '40px', height: '40px', top: '90%', left: '90%'}
  },
  {
    offset: 0,
    speed: 0,
    style: {width: '100px', height: '100px', top: '90%', left: '90%'} 
  },
  {
    offset: 0,
    speed: 0.5,
    style: {width: '50px', height: '50px', top: '90%', left: '68%'},
    class: 'move-y' 
  },
  {
    offset: 0,
    speed: 0.5,
    style: {width: '30px', height: '30px', top: '88%', left: '70%'},
    class: 'move-x' 
  },
  {
    offset: 0,
    speed: 1.5,
    style: {width: '30px', height: '30px', top: '93%', left: '70%'} 
  },
  {
    offset: 0.5,
    speed: 0.1,
    style: {width: '35px', height: '35px', top: '60%', left: '40%'},
    class: 'skills-blob' 
  },
  {
    offset: 1,
    speed: 1.5,
    style: {width: '50px', height: '50px', top: '10%', left: '85%'},
    class: 'skills-blob' 
  },
  {
    offset: 1,
    speed: 1,
    style: {width: '35px', height: '35px', top: '10%', left: '82%'},
    class: 'skills-blob' 
  },
  {
    offset: 1,
    speed: 0.5,
    style: {width: '50px', height: '50px', top: '95%', left: '68%'},
    class: 'move-x skills-blob' 
  },
  {
    offset: 1,
    speed: 0.5,
    style: {width: '50px', height: '50px', top: '93%', left: '70%'},
    class: 'move-y skills-blob' 
  },
  {
    offset: 1,
    speed: 0.5,
    style: {width: '50px', height: '50px', top: '95%', left: '70%'},
    class: 'move-y skills-blob' 
  },
  {
    offset: 1,
    speed: 0.5,
    style: {width: '50px', height: '50px', top: '93%', left: '68%'},
    class: 'move-x skills-blob' 
  },
  {
    offset: 1.5,
    speed: 2,
    style: {width: '35px', height: '35px', top: '93%', left: '70%'},
    class: 'skills-blob'  
  },
  {
    offset: 1.5,
    speed: 0.1,
    style: {width: '35px', height: '35px', top: '50%', left: '20%'},
    class: 'skills-blob'  
  },
  {
    offset: 2,
    speed: 1.2,
    style: {width: '50px', height: '50px', top: '0%', left: '60%'} 
  },
  {
    offset: 2,
    speed: 1.5,
    style: {width: '35px', height: '35px', top: '0%', left: '58%'} 
  }
];

interface BackgroundBlob {
  offset: number,
  speed: number,
  style: React.CSSProperties,
  class?: string
}