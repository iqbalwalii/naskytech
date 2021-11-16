import React from "react";
import { Container, Button, Navbar, Nav } from "react-bootstrap";
import Image from "next/image";
const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <div className="d-flex">
            <Navbar.Brand href="#">
              <Image src="/assets/logo.png" width="120px" height="40px" />
            </Navbar.Brand>
          </div>
          <div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px", fontWeight: "bold" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Why Us</Nav.Link>
                <Nav.Link href="#action2">Services</Nav.Link>
                <Nav.Link href="#action1">Staff Augmentation</Nav.Link>
                <Nav.Link href="#action2">Portfolio</Nav.Link>
                <Nav.Link href="#action1">Blog</Nav.Link>
                <Nav.Link href="#action2">Contact Us</Nav.Link>
                <div className="">
                  <Button variant="outline-success">Join Us</Button>
                </div>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
