import '../App.min.css';
import '@fontsource/bebas-neue';
import '@fontsource/raleway';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect, useRef, useState } from 'react';
import { config, useTrail } from 'react-spring';

import About from 'components/About/About';
import Background from 'components/Background/Background';
import Contact from 'components/Contact/Contact';
import Cursor from 'components/Background/Cursor';
import Curve from 'components/Curve';
import Header from 'components/Header/Header';
import Logo from 'components/Navbar/Logo';
import Projects from 'components/Projects/Projects';
import SEO from 'components/SEO';
import Skills from 'components/Skills/Skills';
import ThemeToggler from 'components/Navbar/ThemeToggler';
import Utils from 'shared/Utils';

// TODO: gatsby-plugin-manifest (PWA)
// TODO: Update resume
// TODO: Google Maps -> React.lazy()
// TODO: Check fadeout div index over contact section
export default function IndexPage() {

  const parallax = useRef<IParallax>(null);
  const page = useRef(0);
  const [touchDevice, isTouchDevice] = useState(false);
  const fastCursor = { duration: 50 }; // Alternative => { tension: 1200, friction: 60 };
  const slowCursor = { mass: 10, tension: 200, friction: 50 };
  const [trail, api] = useTrail(2, i => ({ xy: [0, 0], config: i === 0 ? fastCursor : slowCursor}));
  const handleMouseMove = e => (api.start({ xy: [e.clientX, e.clientY] }));
  const handleArrowUp = () => Utils.handleArrowUp(parallax, page);
  const handleArrowDown = () => Utils.handleArrowDown(parallax, page);
  const scrollTo = (to: number) => Utils.scrollTo(to, parallax, page);

  useEffect(() => {
    Utils.toggleClass('.cursorMain', 'onHeader', true);
    Utils.resetContentScroll();
    scrollTo(0);
    isTouchDevice(Utils.isTouchDevice());
  }, []);

  return (
    <div onMouseMove={handleMouseMove} style={{cursor: `${!touchDevice ? 'none' : 'auto'}`}}>
      <SEO/>
      <Logo className="sticky-nav--element sticky-nav--logo" scrollTop={handleArrowUp}/>
      <ThemeToggler className="sticky-nav--element sticky-nav--toggler"/>
      <div className="sticky-nav--element sticky-nav--fadeout"></div>
      <Cursor trail={trail} isTouchDevice={touchDevice}/>

      <Parallax className="parallax-main" enabled={false} ref={parallax} pages={2} config={config.molasses}>
      
        <Header offset={0} speed={0} scrollTo={handleArrowDown}/>
        
        <ParallaxLayer className="content-background" offset={1} speed={0.2}>
          <Curve upper={true}/>
          <Parallax pages={4} id='content'>

            <Background/>
            <ParallaxLayer offset={0}>
              <About/>
            </ParallaxLayer>
            <ParallaxLayer offset={1}>              
              <Skills/>
            </ParallaxLayer>
            <ParallaxLayer offset={2}>              
              <Projects />
            </ParallaxLayer>
            <ParallaxLayer sticky={{start: 3, end: 3}} style={{zIndex: 3}}>              
              <Contact handleArrowUp={handleArrowUp}/>
            </ParallaxLayer>
            <ParallaxLayer sticky={{start: 0, end: 3}} style={{zIndex: 2, pointerEvents: 'none'}}>
              <Curve upper={false}/>
            </ParallaxLayer>
            
          </Parallax>
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}
