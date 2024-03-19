import React from "react";
import { Container } from "react-bootstrap";
import EducationCard from "./education/EducationCard";
import "../css/Education.css";

import _PORTFOLIO from "../_includes/portfolio";

const Education = () => {
  return (
    <div id="Education">
      <Container className="containerBlock">
        <h1 className="sectionHeader">Education</h1>
        {_PORTFOLIO._BIO.education.map((edu) => (
          <EducationCard key={edu._id} education={edu} />
        ))}
      </Container>
    </div>
  );
};

export default Education;
