import React from "react";

//To use this Parallax add layer class and a data-speed to the elements
export default function Parallax() {
  React.useEffect(() => {
    document.addEventListener("mousemove", parallax);
    function parallax(e) {
      this.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform =
          "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }
  }, []);
}
