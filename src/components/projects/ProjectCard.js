import React from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import projectStock from "img/projects/projectStock.jpg"

import "css/Projects.css";

const ProjectCard = (projectObj) => {
  const project = projectObj.project;

  console.log(window.location.host);

  const imageURL =
    project.imageURL !== "" ? window.location.host + "/" + project.imageURL : projectStock;

  return (
    <Col style={{ marginTop: "2em" }}>
      <Card>
        <Row xs={1} sm={2}>
          <Col sm={3}>
            <Image src={imageURL} className="img-fluid" />
          </Col>
          <Col sm={9} style={{ paddingRight: "2em" }}>
            <h4 className="text-center" style={{ marginTop: "1em" }}>{project.title}</h4>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ProjectCard;
