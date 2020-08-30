import React from "react";
import Fade from "react-reveal/Fade";
import { projects } from "../assets";
import { Row, Col } from "react-bootstrap";
import WebPicture from "./WebPicture";

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
        <img
          alt=" "
          onClick={() => clickHandler(".projectsFirst")}
          src={projects.semte}
          className="semte firstProj"
        />
        <img
          alt=" "
          onClick={() => clickHandler(".projectsSecond")}
          src={projects.clauBday}
          className="clauBday secondProj"
        />
        <img
          alt=" "
          onClick={() => clickHandler(".projectsThird")}
          src={projects.labelsRoom}
          className="labelsRoom thirdProj"
        />
        <img
          alt=" "
          onClick={() => clickHandler(".projectsFourth")}
          src={projects.native}
          className="nativeApp fourthProj"
        />
        <img
          alt=" "
          onClick={() => clickHandler(".projectsFifth")}
          src={projects.others}
          className="others fifthProj"
        />
      </div>
      <div className="projectContent">
        <Row className="semteContent">
          <Col lg={8} md={6}>
            <h2>SEMTE</h2>
            <h3>
              This is the first Front-end project I ever made.
              <br />
              It is an air conditioning company website that I made from scratch
              only using HTML, CSS and eventually Javascript as I was learning
              on the run.
            </h3>
            <h3>
              I am currently rewriting the entire app to migrate it to React JS
              now that I'm far more experienced than I was.
              <br />
              <br />
              <br />
              Date: 2017
              <br />
              Technologies: HTML, CSS, Javascript
            </h3>
          </Col>
          <Col lg={4} md={6} className="preview">
            <a href="http://semte.es" target="_blank" rel="noopener noreferrer">
              <WebPicture
                src={projects.semtePreview_original}
                srcWebp={projects.semtePreview}
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
              Technologies: React JS, SASS/CSS
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
              />
            </a>
          </Col>
        </Row>
        <Row className="labelsContent">
          <Col lg={8} md={6}>
            <h2>Labels Room</h2>
            <h3>
              For this project I collaborated in the creation of the B2B
              (buisness to buisness) eCommerce part of the website and the
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
              />
            </a>
          </Col>
        </Row>
        <Row className="nativeContent">
          <Col lg={8} md={6}>
            <h2>To Do list app</h2>
            <h3>
              At the beginning of 2020 I decided to learn mobile app development
              and I opted to learn React Native as I was familiar with
              Javascript.
              <br />
              The goal was no other than to learn the framework by creating an
              app that required a general knowledge.
              <br />
              <br />
              Thanks to this project I discovered the usefulness of frameworks
              like React JS and I started using it on the web.
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
            />
          </Col>
        </Row>
        <Row className="othersContent">
          <h2>Other Projects</h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          inventore dolorem mollitia rem at saepe quia voluptas ea explicabo
          officiis, assumenda, dicta ipsam soluta dignissimos a repellendus
          eaque vitae cupiditate.
        </Row>
      </div>
    </div>
  );
}
