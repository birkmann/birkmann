import React from "react";
import Header from "../components/header/header";
import IntroProjects from "../components/introProjects/introProjects";
import Teaser from "../components/teaser/teaser";

function Projects() {
  document.title = "Birkmann Design | Projekte ";
  return (
    <div>
      <Header />
      <IntroProjects />
      <Teaser />
      <main className='container'>
        <h2>Projekte</h2>
      </main>
    </div>
  );
}

export default Projects;
