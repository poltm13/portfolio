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

  return (
    <>
      {!hide && (
        <div>
          <Header />

          <About />

          <Skills />

          <Education />

          <ArrowUp />
        </div>
      )}

      <Projects />
    </>
  );
}

export default App;
