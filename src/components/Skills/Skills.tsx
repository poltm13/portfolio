import React, { FC, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';

import { Row } from 'react-bootstrap';
import SkillChart from './SkillChart';
import useElementOnScreen from 'shared/useElementOnScreen';

const Skills:FC = () => {
  
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
        <Row>
          <SkillChart className="chartContainer col-xl-7 col-md-6 col-sm-12"
            isVisible={isVisible} 
            selected={skillSelected}
            setSelected={setSelected}
            parentProps={parentProps}
          />
          <animated.div className="skillText col-xl-5 col-md-6 col-sm-12"
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
        </Row>
      </animated.div>
    </section>
  );
};

export default Skills;
