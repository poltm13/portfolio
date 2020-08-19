import React from "react";
import arrowUp from "../assets/arrow-up.svg";

export default function ArrowUp() {
  return (
    <div className="arrow">
      <img
        alt="Arrow to scroll top"
        id="arrowNav"
        src={arrowUp}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />
    </div>
  );
}
