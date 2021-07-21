import React from 'react';
import Utils from 'shared/Utils';
import WebPicture from 'shared/WebPicture';

export default function Skill(props) {
  return (
    <div style={{display: 'flex'}} className={props.focused ? 'focused' : ''}>
      <div className="skill__img" {...Utils.hoverEffect(props.color)}>
        <WebPicture
          src={props.src}
          srcType={props.srcType}
        />
      </div>
      <div className='skill__chart'>
        <div className="skill__chart--tooltiptext">
          <span>{`${props.name} (${props.skill})`}</span>
        </div>
        <div className="skill__chart--bar">
          <div>
            <div style={{ width: props.skill }}>
              <div className="chart" style={{ background: props.color }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}