import React from "react";
import { Container, Row } from "react-bootstrap";
import PaperCard from "./papers/PaperCard";
import "css/Papers.css"

import _PORTFOLIO from "_includes/portfolio";

const Papers = () => {
  return (
    <div id="Papers">
      <Container className="containerBlock">
        <h1 className="sectionHeader text-center">Papers</h1>
        <Row xs={1} md={2} lg={3}>
            {_PORTFOLIO._PAPERS.map((paper) => <PaperCard key={paper.title} paper={paper} />)}
        </Row>
      </Container>
    </div>
  );
};

export default Papers;
