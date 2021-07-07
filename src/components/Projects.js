import { Col, Row } from "react-bootstrap";

import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazy-load";
import React from "react";
import WebPicture from "./WebPicture";
import { projects } from "../assets";

export default function Projects() {
  const clickHandler = (inputItem) => {
    let item = document.querySelector(inputItem);
    item.checked = !item.checked;
  };

  return (
    <div className="projects">
      <Fade right>
        <h1 onClick={() => clickHandler(".noneChecked")}>Projects</h1>
      </Fade>
      <input type="radio" className="projectsFirst" name="ProjInput" />
      <input type="radio" className="projectsSecond" name="ProjInput" />
      <input type="radio" className="projectsThird" name="ProjInput" />
      <input type="radio" className="projectsFourth" name="ProjInput" />
      <input type="radio" className="projectsFifth" name="ProjInput" />
      <input type="radio" className="noneChecked" name="ProjInput" />
      <div className="projectLogos">
        <WebPicture
          srcWebp={projects.semte}
          src={projects.semte_original}
          srcType={projects.semteType}
          onClick={() => clickHandler(".projectsFirst")}
          className="semte firstProj"
        />
        <WebPicture
          srcWebp={projects.clauBday}
          src={projects.clauBday_original}
          srcType={projects.clauBdayType}
          onClick={() => clickHandler(".projectsSecond")}
          className="clauBday secondProj"
        />
        <WebPicture
          srcWebp={projects.labelsRoom}
          src={projects.labelsRoom_original}
          srcType={projects.labelsRoomType}
          onClick={() => clickHandler(".projectsThird")}
          className="labelsRoom thirdProj"
        />
        <WebPicture
          srcWebp={projects.native}
          src={projects.native_original}
          srcType={projects.nativeType}
          onClick={() => clickHandler(".projectsFourth")}
          className="nativeApp fourthProj"
        />
        <WebPicture
          srcWebp={projects.others}
          src={projects.others}
          srcType={"png"}
          onClick={() => clickHandler(".projectsFifth")}
          className="others fifthProj"
        />
      </div>
      <Fade bottom big>
        <div className="projectContent">
          <Row className="semteContent">
            <Col lg={8} md={6}>
              <h2>SEMTE</h2>
              <h3>
                This is the first Front-end project I ever made.
                <br />
                It is an air conditioning company website that I made from
                scratch using only HTML, CSS and eventually Javascript as I was
                learning on the run.
              </h3>
              <br />
              <h3>
                In 2020 I migrated the entire application to ReactJS and rewrote
                all the codebase applying the knowledge acquired during all
                these years
                <br />
                <br />
                <br />
                Date: 2017 / 2020
                <br />
                Technologies: HTML, CSS, Javascript , ReactJS, GatsbyJS, SASS
              </h3>
              <a
                href="https://semte.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="oldPage"
              >
                <h3>Old page</h3>
                <span>
                  <svg
                    width="40"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </span>
              </a>
            </Col>
            <Col lg={4} md={6} className="preview">
              <a
                href="https://semte.es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebPicture
                  src={projects.semtePreview_original}
                  srcWebp={projects.semtePreview}
                  srcType={projects.semtePreviewType}
                />
              </a>
            </Col>
          </Row>

          <Row className="clauBdayContent">
            <Col lg={8} md={6}>
              <h2>HappyBday</h2>
              <h3>
                This geeky project is a present to my girlfriend for her 24th
                birthday.
                <br />
                It is basically a bunch of images that are either from some trip
                we made or that we just find funny. <br />
                <br />
                <br />
                Date: 2020
                <br />
                Technologies: ReactJS, SASS/CSS
              </h3>
            </Col>
            <Col lg={4} md={6} className="preview">
              <a
                href="https://happybdayclau.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebPicture
                  src={projects.clauPreview_original}
                  srcWebp={projects.clauPreview}
                  srcType={projects.clauPreviewType}
                />
              </a>
            </Col>
          </Row>

          <Row className="labelsContent">
            <Col lg={8} md={6}>
              <h2>Labels Room</h2>
              <h3>
                For this project I collaborated in the creation of the B2B
                (business to business) eCommerce part of the website and the
                styiling of it.
                <br />
                <br />
                <br />
                Date: 2020
                <br />
                Technologies: WordPress, CSS
              </h3>
            </Col>
            <Col lg={4} md={6} className="preview">
              <a
                href="https://labelsroom.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WebPicture
                  src={projects.labelsPreview_original}
                  srcWebp={projects.labelsPreview}
                  srcType={projects.labelsPreviewType}
                />
              </a>
            </Col>
          </Row>

          <Row className="nativeContent">
            <Col lg={8} md={6}>
              <h2>To Do list app</h2>
              <h3>
                At the beginning of 2020 I decided to learn mobile app
                development and I opted to learn React Native as I was familiar
                with Javascript.
                <br />
                The goal was no other than to learn the framework by creating an
                app that required a general knowledge.
                <br />
                <br />
                Thanks to this project I discovered the usefulness of frameworks
                like ReactJS and I started using it on the web.
                <br />
                <br />
                <br />
                Date: 2020
                <br />
                Technologies: React Native, CSS
              </h3>
            </Col>
            <Col lg={4} md={6} className="preview">
              <WebPicture
                src={projects.nativePreview_original}
                srcWebp={projects.nativePreview}
                srcType={projects.nativePreviewType}
              />
            </Col>
          </Row>

          <Row className="othersContent">
            <h2>Other Projects</h2>
            <h3>
              These are little games I made just for fun with Javascript graphic
              libraries such as p5.js or Pixi.js but did not host on the
              internet.
            </h3>

            <div className="previews">
              <div className="preview invaders">
                <h3>Space invaders</h3>
                <LazyLoad height={343} offsetVertical={0}>
                  <WebPicture
                    src={projects.invaders_original}
                    srcWebp={projects.invaders}
                    srcType={projects.invadersType}
                  />
                </LazyLoad>
              </div>
              <div className="preview asteroids">
                <h3>Asteroids</h3>
                <LazyLoad height={168} offsetVertical={0}>
                  <WebPicture
                    src={projects.asteroids_original}
                    srcWebp={projects.asteroids}
                    srcType={projects.asteroidsType}
                  />
                </LazyLoad>
              </div>
              <div className="preview pong">
                <h3>Pong</h3>
                <LazyLoad height={168} offsetVertical={0}>
                  <WebPicture
                    src={projects.pong_original}
                    srcWebp={projects.pong}
                    srcType={projects.pongType}
                  />
                </LazyLoad>
              </div>
              <div className="preview agario">
                <h3>Agar.io</h3>
                <LazyLoad height={168} offsetVertical={0}>
                  <WebPicture
                    src={projects.agario_original}
                    srcWebp={projects.agario}
                    srcType={projects.agarioType}
                  />
                </LazyLoad>
              </div>
            </div>
          </Row>
        </div>
      </Fade>
    </div>
  );
}
