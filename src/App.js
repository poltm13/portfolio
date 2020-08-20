import React from "react";
import "./App.css";

import ArrowUp from "./components/ArrowUp";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Header />

      <About />

      <Skills />

      <Education />

      <ArrowUp />
    </>
  );
}

export default App;
