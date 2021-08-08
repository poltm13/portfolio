import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

import SkillChart from './SkillChart';
import useElementOnScreen from 'shared/useElementOnScreen';

export default function Skills() {
  
  const [ containerRef, isVisible ] = useElementOnScreen({ threshold: 0.5 });
  const [skillSelected, setSelected] = useState(0);

  const props = useSpring({ 
    x: isVisible ? 0 : -200, 
    opacity: isVisible ? 1 : -0.3,
    config: config.molasses
  });

  const parentProps = useSpring({ 
    y: skillSelected ? 100 : 0,
    delay: 400
  });

  return (
    <section ref={containerRef as React.MutableRefObject<any>}>
      <animated.div style={props} className="skills">
        <h1>Skills</h1>
        <div className="skills--container">
          <SkillChart className="chartContainer"
            isVisible={isVisible} 
            selected={skillSelected}
            setSelected={setSelected}
            parentProps={parentProps}
          />
          <animated.div className="skillText"
            style={{ ...parentProps, paddingBottom: '100px'}}
          >
            <div>
              <h3>Proactivity</h3>
              <h3>Good english level</h3>
              <h3>Self learning ability, fast learner</h3>
              <h3>Leadership and team working</h3>
              <h3>Good problem solver</h3>
            </div>
          </animated.div>
        </div>
      </animated.div>
    </section>
  );
}