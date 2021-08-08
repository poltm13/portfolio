import { animated, config, useSpring } from 'react-spring';
import { innerHeaderLogos, outerHeaderLogos } from 'assets/index';

import Avatar from './Avatar';
import { ParallaxLayer } from '@react-spring/parallax';
import { ParallaxProps } from 'shared/interfaces/ParallaxProps';
import React from 'react';
import Utils from 'shared/Utils';
import { arrowUp } from 'assets/index';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];

const innerLogos = (x, y) => `translate(${x / 14}px,${y / 12}px)`;
const outerLogos = (x, y) => `translate(${x / 5}px,${y / 5}px)`;

export default function Header(props: ParallaxProps) {

  const animations = [
    {
      name: 'logos',
      xy: [0, 0],
      config: config.slow
    },
    {
      name: 'avatar',
      xy: [0, 0],
      config: config.stiff
    }
  ];

  const [spring, setSpring] = useSpring(() => animations[0]);
  const [avatarSpring, setAvatarSpring] = useSpring(() => animations[1]);

  return (
    <ParallaxLayer
      offset={props.offset}
      factor={props.factor}
      speed={props.speed}
      style={{ overflow: 'hidden', height: '130vh' }}
      className="headerContainer"
      onMouseMove={({ clientX: x, clientY: y }) => {
        const foo = calc(x, y);
        setSpring.start({ xy: foo });
        setAvatarSpring.start({ xy: foo });
      }}
    >
      <ParallaxLayer offset={props.offset} speed={-0.8} style={{ zIndex: 1}}>
        <animated.div
          className="card1"
          style={{
            transform: spring.xy.to(innerLogos), 
            willChange: 'transform'
          }}
        >
          <div className="headerLogosInner">
            {innerHeaderLogos.map((data, index) => {
              return <img alt="" src={data} key={index} />;
            })}
          </div>
        </animated.div>

        <animated.div
          className="card2"
          style={{
            transform: spring.xy.to(outerLogos),
            willChange: 'transform'
          }}
        >
          <div className="headerLogosOuter">
            {outerHeaderLogos.map((data, index) => {
              return <img alt="" src={data} key={index} />;
            })}
          </div>
        </animated.div>
      </ParallaxLayer>
      <header>
        <ParallaxLayer offset={props.offset} speed={-0.8}>
          <div className="faceContainer">
            <Avatar avatarSpring={avatarSpring} />
          </div>

          <div className="typewriter">
            <h1>
              <span className="tags">{'<h1>'}</span> POL TEDESKO MILLÁN
              <span className="tags">{'</h1>'}</span>
            </h1>
          </div>
        </ParallaxLayer>
      </header>
      <ParallaxLayer offset={props.offset} speed={-1.5} style={{ zIndex: 100 }}>
        <div className="downArrowContainer" onClick={() => props.scrollTo()} {...Utils.cursorHoverEffect('black')}>
          <img
            alt=""
            className="downArrow"
            src={arrowUp}
          />
        </div>
      </ParallaxLayer>
    </ParallaxLayer>
  );
}
