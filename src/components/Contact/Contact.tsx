import { animated, config, useSpring } from 'react-spring';

import ArrowUp from 'components/ArrowUp';
import Curve from 'components/Curve';
import DownloadIcon from './DownloadIcon';
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedInIcon';
import MailIcon from './MailIcon';
import Map from './Map';
import React from 'react';
import Utils from 'shared/Utils';
import { contact } from 'assets/index';
import useElementOnScreen from 'shared/useElementOnScreen';

const Contact = ({handleArrowUp}) => {

  const [ containerRef, isVisible ] = useElementOnScreen({ threshold: 0.5 });

  const props = useSpring({ 
    y: isVisible ? 0 : 200, 
    opacity: isVisible ? 1 : -0.3,
    config: config.molasses 
  });

  return (
    <section className="contact-container" ref={containerRef as React.MutableRefObject<any>}>
      <Curve style={{top: 0, bottom: 'auto', transform: 'translateY(-98%)'}} upper={false}/>
      <animated.div className="contact" style={props}>
        <a href={contact.cv} target="_blank" rel="noopener noreferrer" > 
          <button
            className="contact--resume"
            {...Utils.hoverEffect()}
          >
            <span><DownloadIcon /></span>Download my resume
          </button>
        </a>
        <div className="contact--media">
          <span {...Utils.hoverEffect('#F1C71D')}><MailIcon /></span>
          <span {...Utils.hoverEffect('#211F1F')}><GithubIcon /></span>
          <span {...Utils.hoverEffect('#2867B2')}><LinkedInIcon /></span>
          <span {...Utils.hoverEffect('#C13584')}><InstagramIcon /></span>
        </div>
        <div className="contact--map">
          <Map />
        </div>
      </animated.div>
      <ArrowUp scrollTop={handleArrowUp}/>
    </section>
  );
};

export default Contact;
