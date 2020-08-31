export default function scrollTop() {
  let delay =
    (window.pageYOffset || document.documentElement.scrollTop) > 0 ? 700 : 0;

  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    document
      .querySelector(".headerContainer")
      .classList.toggle("sticky", false);
    document.querySelector("body").classList.toggle("overflow-auto", false);
    document
      .querySelector(".headerLogosOuter")
      .classList.toggle("stickyOuter", false);
    document
      .querySelector(".headerLogosInner")
      .classList.toggle("stickyInner", false);

    document.querySelector(".downArrow").classList.toggle("zIndex", false);
    document
      .querySelector(".headerLogosOuter")
      .classList.toggle("zIndex", false);
    document
      .querySelector(".headerLogosInner")
      .classList.toggle("zIndex", false);
  }, delay);
}
