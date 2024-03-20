import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "./projects/ProjectCard";

import _PORTFOLIO from "_includes/portfolio";

const Projects = () => {
  return (
    <div id="Projects">
      <Container className="containerBlock">
        <h1 className="sectionHeader text-center">Featured Projects</h1>
        <Row xs={1} className="no-gutters">
          {_PORTFOLIO._PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
