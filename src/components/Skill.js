import React from "react";
import { Col } from "react-bootstrap";
import WebPicture from "./WebPicture";

export default function Skill(props) {
  return (
    <Col xs={12} sm={6} className="skill">
      <Col xs={4} className="languangeImg">
        <WebPicture
          src={props.src}
          srcWebp={props.srcWebp}
          srcType={props.srcType}
        />
      </Col>
      <Col xs={8} className="languangeChart">
        <div className="tooltiptext">
          <span>{props.name + "  (" + props.skill + ")"}</span>
        </div>
        <div className="bar">
          <div>
            <div style={{ width: props.skill }}>
              <div className="chart" style={{ background: props.color }}></div>
            </div>
          </div>
        </div>
      </Col>
    </Col>
  );
}
