import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import {
  Motherboard,
  FileText,
  FileEarmarkPerson,
} from "react-bootstrap-icons";
import "../../css/NavbarComponent.css";

import _BIO from "../../_includes/bio";

const NavbarComponent = () => {
  return (
    <Navbar
      id="main-navbar"
      expand="lg"
      bg="transparent"
      variant="dark"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image src="https://github.com/ethancheez.png" height="50px" roundedCircle />
          {_BIO.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/projects">
              <Motherboard />
              Projects
            </Nav.Link>
            <Nav.Link href="/papers">
              <FileText />
              Papers
            </Nav.Link>
            <Nav.Link href="/resume">
              <FileEarmarkPerson />
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
