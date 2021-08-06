import '../App.min.css';
import '@fontsource/bebas-neue';
import '@fontsource/raleway';

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useEffect, useMemo, useRef } from 'react';
import { config, useTrail } from 'react-spring';

import About from 'components/About/About';
import Background from 'components/Background/Background';
import Contact from 'components/Contact/Contact';
import Cursor from 'components/Background/Cursor';
import Curve from 'components/Curve';
import Header from 'components/Header/Header';
import Logo from 'components/Navbar/Logo';
import Projects from 'components/Projects/Projects';
import Skills from 'components/Skills/Skills';
import ThemeToggler from 'components/Navbar/ThemeToggler';
import Utils from 'shared/Utils';

export default function IndexPage() {

  const parallax = useRef<IParallax>(null);
  const page = useRef(0);
  const touchDevice = useMemo(() => Utils.isTouchDevice(), []);
  const fastCursor = { duration: 50 }; // Alternative => { tension: 1200, friction: 60 };
  const slowCursor = { mass: 10, tension: 200, friction: 50 };
  const [trail, api] = useTrail(2, i => ({ xy: [0, 0], config: i === 0 ? fastCursor : slowCursor}));
  const handleMouseMove = e => (api.start({ xy: [e.clientX, e.clientY] }));

  const scrollTo = (to: number) => { 
    parallax?.current?.scrollTo(to);
    page.current = to;
  };
  
  const handleArrowUp = () => {
    scrollTo(0);
    document.querySelectorAll('.sticky-nav--element').forEach(el => el.classList.toggle('sticky-nav--anim', false));
    setTimeout(() => Utils.resetContentScroll(), 1000);
  };

  const handleArrowDown = () => {
    scrollTo(1);
    document.querySelectorAll('.sticky-nav--element').forEach(el => el.classList.toggle('sticky-nav--anim', true));
  };

  useEffect(() => {
    Utils.resetContentScroll();
    scrollTo(0);
  }, []);

  return (
    <div onMouseMove={handleMouseMove} style={{cursor: `${!touchDevice ? 'none' : 'auto'}`}}>
      <Logo className="sticky-nav--element sticky-nav--logo" scrollTop={handleArrowUp}/>
      <ThemeToggler className="sticky-nav--element sticky-nav--toggler"/>
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
