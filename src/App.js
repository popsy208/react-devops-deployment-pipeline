import React from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Aim from "./components/Aim";
import Objectives from "./components/Objectives";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Aim />
      <Objectives />
      <Contact />
    </div>
  );
}

export default App;