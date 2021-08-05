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

const Contact = ({handleArrowUp}) => {

  return (
    <section className="contact-container">
      <Curve style={{top: 0, bottom: 'auto', transform: 'translateY(-98%)'}} upper={false}/>
      <div className="contact">
        <a href={contact.cv} target="_blank" rel="noopener noreferrer" > 
          <button
            className="contact--resume"
            {...Utils.cursorHoverEffect()}
          >
            <span><DownloadIcon /></span>Download my resume
          </button>
        </a>
        <div className="contact--media">
          <span {...Utils.cursorHoverEffect('#F1C71D')}><MailIcon /></span>
          <span {...Utils.cursorHoverEffect('#211F1F')}><GithubIcon /></span>
          <span {...Utils.cursorHoverEffect('#2867B2')}><LinkedInIcon /></span>
          <span {...Utils.cursorHoverEffect('#C13584')}><InstagramIcon /></span>
        </div>
        <div className="contact--map">
          <Map />
        </div>
      </div>
      <ArrowUp scrollTop={handleArrowUp}/>
    </section>
  );
};

export default Contact;
