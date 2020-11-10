import React from "react";
import arrowUp from "../assets/arrow-up.svg";
import scrollTop from "./scrollTop";

export default function ArrowUp() {
  return (
    <div className="arrow">
      <img alt="Arrow to scroll top" src={arrowUp} onClick={scrollTop} />
    </div>
  );
}
