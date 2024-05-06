import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import companyLogo from "../assets/logo/logo.png";
import { theme } from "../utils/constant";

function CustomNavbar() {
  return (
    <Navbar
      expand="lg"
      className="px-4"
      style={{ backgroundColor: theme.light }}
      sticky="top"
    >
      <Navbar.Brand>
        <img src={companyLogo} alt="torsoTools" height={"50px"} />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto d-flex align-items-center gap-3">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#service">Services</Nav.Link>
          <Nav.Link href="#growth">Growth</Nav.Link>
          <Nav.Link href="#whyus">Why Us</Nav.Link>
          <Nav.Link href="#techstack">Tech Stack</Nav.Link>
          <Nav.Link href="#footer">Contact</Nav.Link>
          <div
            style={{ backgroundColor: theme.primary, color: theme.light }}
            className="px-3 py-2 pointer"
          >
            Get A Quote
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
