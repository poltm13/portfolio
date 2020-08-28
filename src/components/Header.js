import React from "react";
import { faceImg, innerHeaderLogos, outerHeaderLogos } from "../assets";
import scrollTop from "./scrollTop";
import WebPicture from "./WebPicture";
import arrowUp from "../assets/arrow-up.svg";

export default function Header() {
  const arrowHandler = () => {
    document.querySelector(".headerContainer").classList.toggle("sticky", true);
    document.querySelector("body").classList.toggle("overflow-auto", true);
    document
      .querySelector(".headerLogosOuter")
      .classList.toggle("stickyOuter", true);
    document
      .querySelector(".headerLogosInner")
      .classList.toggle("stickyInner", true);
    setTimeout(() => {
      document
        .querySelector(".headerLogosOuter")
        .classList.toggle("zIndex", true);
      document
        .querySelector(".headerLogosInner")
        .classList.toggle("zIndex", true);
    }, 500);
    document.querySelector(".downArrow").classList.toggle("zIndex", true);
  };

  return (
    <div className="headerContainer">
      <div className="headerLogosInner">
        {innerHeaderLogos.map((data, index) => {
          return <img alt=" " src={data} key={index} />;
        })}
      </div>
      <div className="headerLogosOuter">
        {outerHeaderLogos.map((data, index) => {
          return <img alt=" " src={data} key={index} />;
        })}
      </div>
      <header>
        <WebPicture
          onClick={scrollTop}
          src={faceImg.face_original}
          srcWebp={faceImg.face}
        />
        <div className="typewriter" onClick={scrollTop}>
          <h1>
            <span className="tags">{"<h1>"}</span> POL TEDESKO MILLÁN
            <span className="tags">{"</h1>"}</span>
          </h1>
        </div>
      </header>
      <img alt=" " className="downArrow" src={arrowUp} onClick={arrowHandler} />
    </div>
  );
}
