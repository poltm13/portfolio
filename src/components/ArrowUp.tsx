import React from 'react';
import { arrowUp } from 'assets/index';

export default function ArrowUp(props) {
  return (
    <div className="arrow">
      <img alt="Arrow to scroll top" src={arrowUp} onClick={() => props.scrollTop()} />
    </div>
  );
}
