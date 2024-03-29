import React from 'react';
import { SkillProps } from 'shared/interfaces/SkillProps';
import Utils from 'shared/Utils';

const Skill = (props: SkillProps) => {
  return (
    <div style={{display: 'flex'}} className={props.focused ? 'focused' : ''}>
      <div className="skill__img" {...Utils.cursorHoverEffect(props.color)}>
        <img src={props.src} alt={props.name + ' logo'} />
      </div>
      <div className='skill__chart'>
        <div className="skill__chart--tooltiptext">
          <span>{`${props.name}`}</span>
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
};

export default React.memo(Skill);