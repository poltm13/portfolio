import React from "react";
import { Col } from "react-bootstrap";

export default function Skill(props) {
  return (
    <Col xs={12} sm={6} className="skill">
      <Col xs={4} className="languangeImg">
        <img alt=" " src={props.src} />
      </Col>
      <Col xs={8} className="languangeChart">
        <span class="tooltiptext">
          {props.name + "  (" + props.skill + ")"}
        </span>
        <div>
          <div style={{ width: props.skill }}>
            <div
              className="chart"
              style={{ backgroundColor: props.color }}
            ></div>
          </div>
        </div>
      </Col>
    </Col>
  );
}
