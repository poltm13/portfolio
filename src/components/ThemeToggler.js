import React, { useState } from "react";
import sun from "../assets/sun.png";
import moon from "../assets/moon.png";

export default function ThemeToggler(props) {
  const [darkTheme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  React.useEffect(() => {
    document.querySelector("body").classList.toggle("dark-mode", darkTheme);
  }, [darkTheme]);

  const toggler = {
    width: "45px",
    height: "22px",
    background: "#4e4e4e",
    right: "0",
    top: "50%",
    borderRadius: "20px",
    transform: "translate(-100%, -50%)",
    cursor: "pointer",
  };

  const togglerDark = {
    background: "#7af2ff",
  };

  const toggle = {
    background: "url(" + sun + ") 0% 0% / 17px",
    width: "17px",
    height: "17px",
    position: "absolute",
    borderRadius: "50%",
    top: "0",
    transform: "translate(2.5px, 2.5px)",
    transition: "all .3s",
    left: "0",
  };

  const toggleDark = {
    background: "url(" + moon + ") 0% 0% / 17px",
    transform: "translate(25.5px, 2.5px)",
  };

  const toggleHandler = () => {
    setTheme(!darkTheme);
  };

  return (
    <div
      style={darkTheme ? { ...toggler, ...togglerDark } : toggler}
      className={props.className}
      onClick={toggleHandler}
    >
      <div
        style={darkTheme ? { ...toggle, ...toggleDark } : toggle}
        className="switch"
      ></div>
    </div>
  );
}
