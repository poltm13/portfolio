import React from "react";
import "./App.css";

import ArrowUp from "./components/ArrowUp";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";

function App() {
  const hide = true;

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <ArrowUp />
      {!hide && <div></div>}
    </>
  );
}

export default App;
