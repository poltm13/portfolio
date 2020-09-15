import React from "react";
import { faceImg, innerHeaderLogos, outerHeaderLogos } from "../assets";
import scrollTop from "./scrollTop";
import WebPicture from "./WebPicture";
import arrowUp from "../assets/arrow-up.svg";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 14}px,${y / 12}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 5}px,${y / 5}px,0)`;

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
      document.querySelector(".card1").classList.toggle("zIndex", true);
      document.querySelector(".card2").classList.toggle("zIndex", true);
    }, 500);
    document.querySelector(".downArrow").classList.toggle("zIndex", true);
  };

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className="headerContainer"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class="card1"
        style={{
          transform: props.xy.interpolate(trans1),
          willChange: "transform",
        }}
      >
        <div className="headerLogosInner">
          {innerHeaderLogos.map((data, index) => {
            return <img alt=" " src={data} key={index} />;
          })}
        </div>
      </animated.div>

      <animated.div
        class="card2"
        style={{
          transform: props.xy.interpolate(trans2),
          willChange: "transform",
        }}
      >
        <div className="headerLogosOuter">
          {outerHeaderLogos.map((data, index) => {
            return <img alt=" " src={data} key={index} />;
          })}
        </div>
      </animated.div>
      <header>
        <WebPicture
          onClick={scrollTop}
          src={faceImg.face_original}
          srcWebp={faceImg.face}
          srcType={faceImg.faceType}
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
