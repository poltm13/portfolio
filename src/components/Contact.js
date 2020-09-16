import React from "react";
import { Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import WebPicture from "./WebPicture";
import { contact } from "../assets";
import Map from "./Map";
import LazyLoad from "react-lazy-load";

export default function Contact() {
  return (
    <div className="contact">
      <Fade right>
        <div className="title">
          <h1>Contact</h1>
          <img alt=" " src={contact.mailIcon} className="mailIcon" />
        </div>
      </Fade>
      <Fade bottom big>
        <Row>
          <Col lg={6} xl={4} className="cv">
            <a href={contact.cv} target="_blank" rel="noopener noreferrer">
              <WebPicture
                src={contact.curriculum_original}
                srcWebp={contact.curriculum}
                srcType={contact.curriculumType}
              />
            </a>
          </Col>
          <Col lg={6} xl={4}>
            <ul style={{ listStyleType: "none" }}>
              <li className="contactItem">
                <p>
                  <img alt="" src={contact.mapIcon} className="contactIcon" />
                  C/Brucs nº19, 08850 Gavà, Barcelona, Spain
                </p>
              </li>
              <li className="contactItem">
                <a href="tel:+34674173927">
                  <img
                    alt=""
                    src={contact.earphoneIcon}
                    className="contactIcon"
                  />
                  674 173 927
                </a>
              </li>
              <li className="contactItem">
                <a href="mailto:poltm13@gmail.com">
                  <img
                    alt=""
                    src={contact.envelopeIcon}
                    className="contactIcon"
                  />
                  poltm13@gmail.com
                </a>
              </li>

              <li className="contactItem">
                <a
                  href="https://www.linkedin.com/in/pol-tedesko-mill%C3%A1n-b56a2a135/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt=""
                    src={contact.linkedIcon}
                    className="contactIcon"
                  />
                  Pol Tedesko Millán
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={12} xl={4} className="map">
            <LazyLoad height={300} width="100%" offsetVertical={300}>
              <Map />
            </LazyLoad>
          </Col>
        </Row>
      </Fade>
    </div>
  );
}
