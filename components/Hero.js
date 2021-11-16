import React from "react";
import { Container, Button } from "react-bootstrap";
import Image from "next/image";
const Hero = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      data-aos="fade-in"
      style={{ height: "80vh" }}
    >
      <div className="d-flex-column">
        <h1 style={{ fontSize: "3.5rem" }}>
          <span style={{ color: "#157347" }}>Lorem ipsum</span> consectetur{" "}
          <br />
          adipisicing elit
        </h1>
        <Button
          variant="success"
          className="mt-4"
          size="lg"
          style={{ background: "#33bf8b" }}
        >
          Partner With Us
        </Button>
      </div>
      <div className="right">
        <Image src="/assets/target.gif" width="300px" height="300px" />
      </div>
    </Container>
  );
};

export default Hero;
