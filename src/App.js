import React from "react";
import NavbarComponent from "./components/misc/NavbarComponent";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Work from "./components/Work";
import GoBackUp from "./components/misc/GoBackUp";
import Projects from "./components/Projects";
import Papers from "components/Papers";
import Footer from "components/misc/Footer";

function App() {
  return (
    <>
      <div id="#">
        <NavbarComponent />
        <AboutMe />
        <Skills />
        <Education />
        <Work />
        <Projects />
        <Papers />
        <Footer />
      </div>
      <GoBackUp />
    </>
  );
}

export default App;
