import React, { useState } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import {
  Person,
  Kanban,
} from "react-bootstrap-icons";
import "css/NavbarComponent.css";

import _PORTFOLIO from "_includes/portfolio";

const NavbarComponent = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [navbarOpacity, setNavbarOpacity] = useState(0.98);

  const onScroll = (e) => {
    const newScrollTop = e.target.documentElement.scrollTop;
    if (newScrollTop > scrollTop) {
      setNavbarOpacity(0.7);
    } else {
      setNavbarOpacity(0.98);
    }
    setScrollTop(newScrollTop);
  };

  window.addEventListener('scroll', onScroll);

  return (
    <Navbar
      id="main-navbar"
      expand="lg"
      bg="transparent"
      variant="dark"
      fixed="top"
      className="bg-body-tertiary"
      style={{ opacity: navbarOpacity }}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image src={_PORTFOLIO._BIO.profilePicture} height="50px" roundedCircle />
          {_PORTFOLIO._BIO.name}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#AboutMe">
              <Person />
              About Me
            </Nav.Link>
            <Nav.Link href="#Work">
              <Kanban />
              Work Experience
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
