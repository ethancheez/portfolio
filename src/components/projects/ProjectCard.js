import React from "react";
import { Card, Col, Row, Image, Button } from "react-bootstrap";
import { Github, Globe2 } from "react-bootstrap-icons";

import "css/Projects.css";

const ProjectCard = (projectObj) => {
  const project = projectObj.project;

  const imageURL =
    project.imageURL !== ""
      ? project.imageURL
      : "img/projects/projectStock.jpg";

  return (
    <Col style={{ marginTop: "2em" }}>
      <Card>
        <Row xs={1} sm={2}>
          <Col sm={3}>
            <Image src={imageURL} className="img-fluid" />
          </Col>
          <Col sm={9}>
            <h4 className="text-center" style={{ marginTop: "1em" }}>
              {project.title}
            </h4>
            <p>{project.summary}</p>
            <div className="btn-row">
              {project.githubURL !== "" ? (
                <Button
                  variant="primary"
                  href={project.githubURL}
                  target="_blank"
                  rel="GitHub Repo"
                >
                  <Github size={25} />
                  {"  "}Github
                </Button>
              ) : null}
              {project.website !== "" ? (
                <Button
                  variant="primary"
                  href={project.website}
                  target="_blank"
                  rel="Project Site"
                >
                  <Globe2 size={25} />
                  {"  "}Website
                </Button>
              ) : null}
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ProjectCard;
