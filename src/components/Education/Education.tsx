import { Col, Row } from 'react-bootstrap';
import React, { FC } from 'react';
import { animated, config, useSpring } from 'react-spring';

import Fade from 'react-reveal/Fade';
import WebPicture from 'shared/WebPicture';
import { education } from 'assets/index';
import useElementOnScreen from 'shared/useElementOnScreen';

const Education:FC = () => {
  const clickHandler = (inputItem) => {
    document.querySelector(inputItem).checked = true;
  };

  const [ containerRef, isVisible ] = useElementOnScreen({ threshold: 0.5 });

  const props = useSpring({ 
    x: isVisible ? 0 : -200, 
    opacity: isVisible ? 1 : 0,
    config: config.molasses 
  });

  return (
    <div ref={containerRef as React.MutableRefObject<any>}>
      <animated.div className="education" style={props}>
        <Fade right>
          <h1>Education</h1>
        </Fade>
        <Fade bottom big>
          <div className="timeline">
            <input
              type="radio"
              className="educationFirst"
              name="educationInput"
              defaultChecked
            />
            <input
              type="radio"
              className="educationSecond"
              name="educationInput"
            />
            <input
              type="radio"
              className="educationThird"
              name="educationInput"
            />
            <ul>
              <li onClick={() => clickHandler('.educationFirst')} className="l1">
                2009-2014
              </li>
              <li onClick={() => clickHandler('.educationSecond')} className="l2">
                2014-2016
              </li>
              <li onClick={() => clickHandler('.educationThird')} className="l3">
                2016-Present
              </li>
              <div className="line">
                <span></span>
              </div>
            </ul>
            <div className="content">
              <Row className="firstContent">
                <Col md={8} sm={6}>
                  <h2>Secondary and High school</h2>
                </Col>
                <Col md={4} sm={6} className="schoolLogo">
                  <img alt=" " src={education.santoangel} />
                </Col>
                <h3>
                  I have lived in Gavà, Barcelona, almost my entire life. During
                  this period of time I studied secondary and first year of high
                  school at Col·legi Santo Angel, where I made most of my current
                  friends.
                </h3>
              </Row>
              <Row className="secondContent">
                <Col md={8} sm={6}>
                  <h2>Panama</h2>
                </Col>
                <Col md={4} sm={6} className="schoolLogo">
                  <WebPicture
                    id="angloLogo"
                    src={education.anglomex_original}
                    srcWebp={education.anglomex}
                    srcType={education.anglomexType}
                  />
                  <WebPicture
                    id="utpLogo"
                    src={education.utp_original}
                    srcWebp={education.utp}
                    srcType={education.utpType}
                  />
                </Col>
                <h3>
                  In 2014 I had to move to Panamá and there I finished my high
                  school studies in a bilingual school called Colegio Anglo
                  Mexicano.
                </h3>
                <h3>
                  After graduating from high school and passing an entrance test,
                  I took a semester of degree in Electromechanical Engineering at
                  the UTP, but in the end I opted for moving back to Spain to
                  prepare for Spanish University Access Tests.
                </h3>
              </Row>
              <Row className="thirdContent">
                <Col md={8} sm={6}>
                  <h2>University</h2>
                </Col>
                <Col md={4} sm={6} className="schoolLogo">
                  <img alt=" " src={education.upc} />
                </Col>
                <h3>
                  Now I&apos;m back again living in Gavà, studying a degree in
                  Telecommunications Engineering at the UPC (Universitat
                  Politécnica de Catalunya) and learning Front-end development in
                  my spare time.
                </h3>
              </Row>
            </div>
          </div>
        </Fade>
      </animated.div>
    </div>
  );
};

export default Education;