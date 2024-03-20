import React from "react";
import { Container, Row } from "react-bootstrap";
import WorkCard from "./work/WorkCard";
import "css/Work.css"

import _PORTFOLIO from "_includes/portfolio";

const Work = () => {
  return (
    <div id="Work">
      <Container className="containerBlock">
        <h1 className="sectionHeader">Work Experience</h1>
        <Row id="workCardDiv" xs={1} md={2} lg={3}>
            {_PORTFOLIO._WORK.map((work) => <WorkCard key={work._id} work={work} />)}
        </Row>
      </Container>
    </div>
  );
};

export default Work;
