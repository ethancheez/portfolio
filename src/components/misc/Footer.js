import React from "react";
import { Container } from "react-bootstrap";
import { Linkedin, EnvelopeFill, Github } from "react-bootstrap-icons";
import "css/Footer.css";

import _PORTFOLIO from "_includes/portfolio";

const Footer = () => {
  return (
    <div id="Footer">
      <Container>
        <div id="footer-icons">
          {_PORTFOLIO._BIO.email !== "" ? (
            <a href={"mailto:" + _PORTFOLIO._BIO.email}>
              <EnvelopeFill className="icon" />
            </a>
          ) : null}

          {_PORTFOLIO._BIO.linkedin !== "" ? (
            <a href={_PORTFOLIO._BIO.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="icon" />
            </a>
          ) : null}

          {_PORTFOLIO._BIO.github !== "" ? (
            <a href={_PORTFOLIO._BIO.github} target="_blank" rel="noreferrer">
              <Github className="icon" />
            </a>
          ) : null}
        </div>
      </Container>
    </div>
  );
};

export default Footer;
