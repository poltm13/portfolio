import React from "react";

export default function useScroll() {
  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      document
        .querySelector("header")
        .classList.toggle("sticky", window.scrollY > 0);
      document
        .querySelector(".headerLogosOuter")
        .classList.toggle("stickyOuter", window.scrollY > 0);
      document
        .querySelector(".headerLogosInner")
        .classList.toggle("stickyInner", window.scrollY > 0);

      if (window.scrollY > 0) {
        setTimeout(() => {
          document
            .querySelector(".headerLogosOuter")
            .classList.toggle("zIndex", window.scrollY > 0);
          document
            .querySelector(".headerLogosInner")
            .classList.toggle("zIndex", window.scrollY > 0);
        }, 500);
      } else {
        document
          .querySelector(".headerLogosOuter")
          .classList.toggle("zIndex", window.scrollY > 0);
        document
          .querySelector(".headerLogosInner")
          .classList.toggle("zIndex", window.scrollY > 0);
      }
    });
  }, []);
}
