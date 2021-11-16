import React from "react";
import { Container, Form, Row, Col, Button, NavItem } from "react-bootstrap";
import item from "../styles/Item.module.css";
import { Linkedin, Twitter, Instagram, Facebook } from "react-bootstrap-icons";
const Footer = () => {
  return (
    <div style={{ background: "#131848" }}>
      <Container>
        <Row>
          <Col style={{ color: "#fff", marginTop: "4rem" }}>
            <h1 data-aos="fade-up" data-aos-duration="800">
              Lorem Ipsum
            </h1>
            <p
              className="text-muted"
              data-aos="fade-up"
              data-aos-duration="1000"
              style={{ fontSize: ".99rem" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              expedita veritatis totam qui iste temporibus blanditiis
              voluptatibus eaque facilis asperiores adipisci commodi voluptates,
              ab at sapiente, nulla aut beatae doloremque quae tempora. Pariatur
              repudiandae quisquam saepe nobis, expedita dolores delectus
              eligendi a nostrum corporis reprehenderit eos totam quam
              reiciendis quod.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              deleniti eum harum modi facere minus aliquid mollitia itaque illum
              ratione? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Culpa rerum eius fugit numquam quaerat quibusdam, obcaecati
              exercitationem eum ullam mollitia maxime enim inventore pariatur
              saepe molestias, facere iste blanditiis unde.
            </p>
          </Col>
          <Col style={{ marginTop: "4rem" }}>
            <Form data-aos="fade-up" data-aos-duration="1000">
              <Form.Group>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  className="mt-5"
                  style={{
                    background: "#1318487e",
                    border: "1px solid #e6e7eb0a",
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  className="mt-2"
                  placeholder="Enter Message"
                  style={{
                    background: "#1318487e",
                    border: "1px solid #e6e7eb0a",
                  }}
                />
              </Form.Group>
              <div className="d-flex justify-content-end mt-2">
                <Button variant="success" style={{ background: "#157347" }}>
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
        <hr />
        <Row data-aos="fade-up" data-aos-duration="1300">
          <Col>
            <ul className={item.list}>
              <h6>TEMPOR INCIDIDUNT</h6>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
            </ul>
          </Col>
          <Col>
            <ul className={item.list}>
              <h6>TEMPOR INCIDIDUNT</h6>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
            </ul>
          </Col>
          <Col>
            <ul className={item.list}>
              <h6>TEMPOR INCIDIDUNT</h6>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
            </ul>
          </Col>
          <Col>
            <ul className={item.list}>
              <h6>TEMPOR INCIDIDUNT</h6>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
              <li className="text-muted">Excepteur sint</li>
            </ul>
          </Col>
          <Col>
            <ul className={item.list}>
              <h6>TEMPOR INCIDIDUNT</h6>
              <li className="text-muted">Excepteur sint</li>
              <div className="socials mt-5">
                <span>
                  <Linkedin
                    size={28}
                    style={{ padding: ".2rem", cursor: "pointer" }}
                  />
                </span>
                <span>
                  <Facebook
                    size={28}
                    style={{ padding: ".2rem", cursor: "pointer" }}
                  />
                </span>
                <span>
                  <Twitter
                    size={28}
                    style={{ padding: ".2rem", cursor: "pointer" }}
                  />
                </span>
                <span>
                  <Instagram
                    size={28}
                    style={{ padding: ".2rem", cursor: "pointer" }}
                  />
                </span>
              </div>
            </ul>
          </Col>
        </Row>
        <Row className={item.bottom}>
          <Col>
            <p className="text-center text-muted">Copyright &copy; 2021</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
