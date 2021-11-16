import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  ArrowRightCircleFill,
  ArrowLeftCircleFill,
} from "react-bootstrap-icons";

const Carousel = () => {
  const [counter, setCounter] = useState(1);
  const Increase = (e) => {
    if (counter >= 1 && counter < 8) {
      setCounter(counter + 1);
    }
  };
  const Decrease = (e) => {
    if (counter > 1 && counter <= 8) {
      setCounter(counter - 1);
    }
  };
  return (
    <div style={{ background: "#131843", height: "100vh" }}>
      <Container>
        <Row>
          <Col className="carousel">
            <h1>0{counter}/08</h1>
            <h2>
              Lorem ipsum <br />
              dolor sit amet <br />
              Lorem
            </h2>
          </Col>
          <Col className="carousel">
            {counter === 1 ? (
              <div className="">
                <h2>Lorem ipsum dolor sit consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  eaque asperiores corrupti. Dolor eum necessitatibus dolores!
                </p>
              </div>
            ) : counter === 2 ? (
              <div className="">
                <h2> dolor sit consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  eaque asperiores corrupti. Dolor eum necessitatibus dolores!
                </p>
              </div>
            ) : counter === 3 ? (
              <div className="">
                <h2>Lorem consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  eaque asperiores corrupti. Dolor eum necessitatibus dolores!
                </p>
              </div>
            ) : counter === 4 ? (
              <div className="">
                <h2>Lorem ipsum </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  eaque asperiores corrupti. Dolor eum necessitatibus dolores!
                </p>
              </div>
            ) : counter === 5 ? (
              <div className="">
                <h2>Lorem dolor sit.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  eaque asperiores corrupti. Dolor eum necessitatibus dolores!
                </p>
              </div>
            ) : counter === 6 ? (
              <div className="">
                <h2>Lorem consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  eaque asperiores corrupti. Dolor eum necessitatibus dolores!
                </p>
              </div>
            ) : counter === 7 ? (
              <div className="">
                <h2>Lorem consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  eaque asperiores corrupti. Dolor eum necessitatibus dolores!
                </p>
              </div>
            ) : (
              <div className="">
                <h2>ipsum consectetur.</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                  eaque asperiores corrupti. Dolor eum necessitatibus dolores!
                </p>
              </div>
            )}
            <div className="d-flex">
              <ArrowLeftCircleFill
                size={38}
                className="btns"
                id="decrease"
                onClick={Decrease}
              />
              &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ArrowRightCircleFill
                size={38}
                className="btns"
                id="increase"
                onClick={Increase}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Carousel;
