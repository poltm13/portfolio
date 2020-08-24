import React from "react";
import Fade from "react-reveal/Fade";
import { projects } from "../assets";
import { Row, Col } from "react-bootstrap";

export default function Projects() {
  const clickHandler = (inputItem) => {
    let item = document.querySelector(inputItem);
    item.checked = !item.checked;

    //buscar si hay algun checked y si no poner una
    //clase con position: absolute al mas largo
  };

  return (
    <div className="projects">
      <Fade right>
        <h1>Projects</h1>
      </Fade>
      <input type="radio" className="projectsFirst" name="ProjInput" />
      <input type="radio" className="projectsSecond" name="ProjInput" />
      <input type="radio" className="projectsThird" name="ProjInput" />
      <input type="radio" className="projectsFourth" name="ProjInput" />
      <input type="radio" className="projectsFifth" name="ProjInput" />
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
        <Row className="semteContent"></Row>
        <Row className="clauBdayContent"></Row>
        <Row className="labelsContent"></Row>
        <Row className="nativeContent"></Row>
        <Row className="othersContent"></Row>
      </div>
    </div>
  );
}
