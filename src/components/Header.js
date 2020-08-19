import React from "react";
import { faceImg, innerHeaderLogos, outerHeaderLogos } from "../assets";
import useScroll from "./useScroll";

export default function Header() {
  useScroll();

  return (
    <>
      <div className="headerLogosInner ">
        {innerHeaderLogos.map((data, index) => {
          return <img alt=" " src={data} key={index} />;
        })}
      </div>
      <div className="headerLogosOuter ">
        {outerHeaderLogos.map((data, index) => {
          return <img alt=" " src={data} key={index} />;
        })}
      </div>
      <header>
        <img src={faceImg} alt=" " />
        <h1>POL TEDESKO MILLÁN</h1>
      </header>
    </>
  );
}
