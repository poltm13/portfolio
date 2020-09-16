import React, { useEffect } from "react";
import "./App.css";
import ArrowUp from "./components/ArrowUp";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <ArrowUp />
    </>
  );
}

export default App;
