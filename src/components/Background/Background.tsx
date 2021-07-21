import { SpringValue, animated } from 'react-spring';

import React from 'react';

const trans = (x: number, y: number) => `translate3d(${2*x}px,${2*y}px,0) translate3d(-50%,-50%,0)`;

interface background {
  trail: { xy: SpringValue<number[]>; }[]
}

const Background = (props: background) => {
  
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
      <div className="cursorMain">
        {props.trail.map((spring, index) => (
          <animated.div key={index} style={{ transform: spring.xy.to(trans) }} />
        ))}
      </div>
    </>
  );
};

export default Background;