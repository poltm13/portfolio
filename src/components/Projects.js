import React from "react";
import Fade from "react-reveal/Fade";
import { projects } from "../assets";
import { Row, Col } from "react-bootstrap";

export default function Projects() {
  const clickHandler = (inputItem) => {
    let item = document.querySelector(inputItem);
    item.checked = true;

    //buscar si hay algun checked y si no poner una
    //clase con position: absolute al mas largo
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
          src={projects.clauBday}
          className="nativeApp fourthProj"
        />
        <img
          alt=" "
          onClick={() => clickHandler(".projectsFifth")}
          src={projects.clauBday}
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
              <img src={projects.semtePreview} alt=" " />
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
              <img src={projects.clauPreview} alt=" " />
            </a>
          </Col>
        </Row>
        <Row className="labelsContent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          dolorem est, ullam nulla ab quaerat corporis temporibus consectetur
          minima beatae perspiciatis possimus. Ab incidunt cumque assumenda
          magnam tempora optio eveniet!
        </Row>
        <Row className="nativeContent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          dolorem est, ullam nulla ab quaerat corporis temporibus consectetur
          minima beatae perspiciatis possimus. Ab incidunt cumque assumenda
          magnam tempora optio eveniet!
        </Row>
        <Row className="othersContent">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          dolorem est, ullam nulla ab quaerat corporis temporibus consectetur
          minima beatae perspiciatis possimus. Ab incidunt cumque assumenda
          magnam tempora optio eveniet!
        </Row>
      </div>
    </div>
  );
}
