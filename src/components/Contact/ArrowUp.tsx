import React from 'react';
import Utils from 'shared/Utils';
import { arrowUp } from 'assets/index';

export default function ArrowUp(props) {
  return (
    <div className="arrow" {...Utils.cursorHoverEffect('black')}>
      <img alt="Arrow to scroll top" src={arrowUp} onClick={() => props.scrollTop()} />
    </div>
  );
}
