import React from "react";
import { education } from "../assets";
import { Row, Col } from "react-bootstrap";

export default function Education() {
  const clickHandler = (inputItem) => {
    document.querySelector(inputItem).checked = true;
  };

  return (
    <div className="education">
      <h1>Education</h1>
      <div className="timeline">
        <input type="radio" className="first" defaultChecked name="input" />
        <input type="radio" className="second" name="input" />
        <input type="radio" className="third" name="input" />
        <ul>
          <li onClick={() => clickHandler(".first")} className="l1 active">
            2009-2014
          </li>
          <li onClick={() => clickHandler(".second")} className="l2">
            2014-2016
          </li>
          <li onClick={() => clickHandler(".third")} className="l3">
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
              <img alt=" " id="angloLogo" src={education.anglomex} />
              <img alt=" " id="utpLogo" src={education.utp} />
            </Col>
            <h3>
              In 2014 I had to move to Panamá and there I finished my high
              school studies in a bilingual school called Colegio Anglo
              Mexicano. <br /> After graduating from high school and passing an
              entrance test, I took a semester of degree in Electromechanical
              Engineering at the UTP, but in the end I opted for moving back to
              Spain earlier than I thought to prepare for Spanish University
              Access Tests.
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Sed quam quasi in culpa distinctio aliquid, saepe optio nam,
              omnis harum voluptatibus. Laborum corporis modi laudantium eius
              debitis nesciunt suscipit vel?
            </h3>
          </Row>
        </div>
      </div>
    </div>
  );
}
