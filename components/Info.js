import React from "react";
import { Container, Button } from "react-bootstrap";
const Info = () => {
  return (
    <div
      style={{
        background: "#615e5e13",
        padding: "4rem",
        height: "100vh",
        display: "flex",
      }}
      data-aos="fade-up"
    >
      <Container>
        <h1
          className="text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          Lorem ipsum dolor sit amet
          <br /> consectetur adipisicing elit.
        </h1>
        <p
          className="text-center text-muted"
          style={{ fontSize: ".9rem" }}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam
          ut totam odit quaerat id perferendis iste cupiditate voluptates
          laborum inventore sequi doloremque, iusto voluptatum officiis impedit
          quod. Illum, aliquam voluptatum natus sunt possimus, eius molestias
          quam necessitatibus architecto, quas et velit dolorem quod facere
          laudantium nostrum inventore ut at? <br /> <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium,
          ipsum!
        </p>
        <div className="d-flex justify-content-center">
          <Button variant="success">Explore More</Button>
        </div>
      </Container>
    </div>
  );
};

export default Info;
