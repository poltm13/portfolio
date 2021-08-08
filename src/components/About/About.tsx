import { animated, config, useSpring } from 'react-spring';

import React from 'react';
import useElementOnScreen from 'shared/useElementOnScreen';

export default function About() {

  const [ containerRef, isVisible ] = useElementOnScreen({ threshold: 0.5 });

  const props = useSpring({ 
    x: isVisible ? 0 : -200, 
    opacity: isVisible ? 1 : -0.3,
    config: config.molasses 
  });
  const { waving } = useSpring({ 
    from: { waving: 0 },
    waving: isVisible ? 0.75 : 0,
    config: {duration: 1500},
    delay: 2000,
    immediate: !isVisible // Prevents animation if true
  });
  
  return (
    <section ref={containerRef as React.MutableRefObject<any>}>
      <animated.div className="about" style={props}>
        <h1>
          <span className="code">{'const '}</span> 
          About Me 
          <span className="code">{' ='}</span>
          <span className="code">{' ( '}</span>
          <svg style={{transform: 'translateY(25%)'}} width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.87739 1.5386C11.9604 3.65312 11.9604 7.06137 9.87739 9.14383C9.62517 9.39606 9.34088 9.61729 9.05713 9.83798C9.53058 10.0902 10.004 10.4376 10.4139 10.848C11.5185 11.9525 12.2126 13.4675 12.2126 15.1716C12.2126 16.2761 10.5085 16.2761 10.5085 15.1716C10.5085 13.9409 10.0035 12.8364 9.21477 12.0476C7.51064 10.3435 4.70197 10.3435 2.99785 12.0476C2.17758 12.8364 1.70412 13.9409 1.70412 15.1716C1.70412 16.2761 0 16.2761 0 15.1716C0 13.4675 0.694153 11.9525 1.79871 10.848C2.17758 10.4376 2.6505 10.0907 3.12396 9.83798C2.80814 9.64882 2.52439 9.39606 2.27216 9.14383C0.189169 7.06084 0.189169 3.65259 2.27216 1.5386C4.35516 -0.512867 7.79493 -0.512867 9.87739 1.5386ZM8.67826 2.73774C7.25842 1.3179 4.89114 1.3179 3.4713 2.73774C2.05147 4.18964 2.05147 6.52486 3.4713 7.94469C4.89114 9.36453 7.25842 9.36453 8.67826 7.94469C10.0981 6.52486 10.0986 4.18964 8.67826 2.73774Z" fill="#000"/>
          </svg>
          <span style={{margin: 0}} className="code">{' )'}</span>
          <span className="code">{' ⇒ '}</span>
          <span className="code">{' {'}</span>
        </h1>
        <div>
          <h3 style={{marginBottom: '20px'}}>
            Hi, I&apos;m Pol Tedesko 
            <animated.span 
              style={{ rotate: waving.to({
                range: [0, 0.125, 0.25, 0.375, 0.50, 0.625, 0.75],
                output: ['0deg', '45deg', '0deg', '45deg', '0deg', '45deg', '0deg']
              })}} 
              className="waving-hand">
              👋
            </animated.span>
          </h3>
          <h3>
            I&apos;m a Telecommunications Technologies and Services Engineering graduate at UPC, 
            specialized in Audiovisual Systems.
          </h3>
          <h3>
            My main interest and experience is in Front-End Web Development, but I also have a passion for design
            as well as voice and image processing. 
          </h3>
          <h3>
            I consider myself a passionate person about new technology and I&apos;m
            always seeking to expand my training and knowledge in the workplace, so that I can 
            eventually play a role as a Full Stack Web Developer.
          </h3>
        </div>
        <p>Scroll down for more</p>
        <h1>
          <span className="code">{'}'}</span>
        </h1>
      </animated.div>
    </section>
  );
}