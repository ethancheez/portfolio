import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Linkedin, EnvelopeAtFill, Github } from "react-bootstrap-icons";
import "../css/AboutMe.css";

import _PORTFOLIO from "../_includes/portfolio";

const AboutMe = () => {
  return (
    <div id="AboutMe">
      <Container className="containerBlock">
        <Row lg={2} md={1} xs={1}>
          <Col id="aboutMe-col1">
            <h1 id="bigName">{_PORTFOLIO._BIO.name}</h1>
            <h2>{_PORTFOLIO._BIO.summary}</h2>
            <div id="iconDiv">
              {_PORTFOLIO._BIO.email !== "" ? (
                <a href={"mailto:" + _PORTFOLIO._BIO.email}>
                  <EnvelopeAtFill className="email-icon icon" size={32} />
                </a>
              ) : null}

              {_PORTFOLIO._BIO.linkedin !== "" ? (
                <a href={_PORTFOLIO._BIO.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="linkedin-icon icon" size={32} />
                </a>
              ) : null}

              {_PORTFOLIO._BIO.github !== "" ? (
                <a href={_PORTFOLIO._BIO.github} target="_blank" rel="noreferrer">
                  <Github className="github-icon icon" size={32} />
                </a>
              ) : null}
            </div>
          </Col>
          <Col>
            <Image
              className="d-block mx-auto img-fluid"
              src={_PORTFOLIO._BIO.profilePicture}
              roundedCircle
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
