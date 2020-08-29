import React from "react";
import { skillLogos } from "../assets";
import Fade from "react-reveal/Fade";
import { Row, Col } from "react-bootstrap";
import Skill from "./Skill";

export default function Skills() {
  return (
    <div className="skills">
      <Fade right>
        <h1>Skills</h1>
      </Fade>
      <Row>
        <Col sm={12} md={6} className="chartContainer">
          <Fade
            bottom
            cascade
            big
            onReveal={() => {
              setTimeout(
                () =>
                  document
                    .querySelectorAll(".chart")
                    .forEach((el) => el.classList.toggle("revealed")),
                1500
              );
            }}
          >
            <div>
              <Row>
                {skillLogos.map((data, index) => {
                  return (
                    <Skill
                      src={data.src}
                      key={index}
                      skill={data.skill}
                      color={data.color}
                      name={data.name}
                    />
                  );
                })}
              </Row>
            </div>
          </Fade>
        </Col>
        <Col sm={12} md={6} className="skillText">
          <Fade bottom cascade big>
            <div>
              <h3>Proactivity</h3>
              <h3>Good english level</h3>
              <h3>Self learning ability, fast learner</h3>
              <h3>Leadership and team working</h3>
              <h3>Good problem solver</h3>
            </div>
          </Fade>
        </Col>
      </Row>
    </div>
  );
}
