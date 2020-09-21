import React from "react";

export default function themeToggler(props) {
  const toggler = {
    width: "45px",
    height: "22px",
    background: "grey",
    right: "0",
    top: "50%",
    borderRadius: "20px",
    transform: "translate(-50%, -50%)",
  };

  const toggle = {
    content: "''",
    background: "white",
    width: "17px",
    height: "17px",
    position: "absolute",
    borderRadius: "50%",
    top: "0",
    transform: "translate(2.5px, 2.5px)",
    transition: "all .3s ease-in-out",
    left: "0",
  };

  const toggleHandler = () => {
    document.querySelector("body").classList.toggle("dark-mode");
  };

  return (
    <div style={toggler} className={props.className} onClick={toggleHandler}>
      <div style={toggle}></div>
    </div>
  );
}
