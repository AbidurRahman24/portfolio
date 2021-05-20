import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./About.css";
import image2 from "../picture/header2.jpg";
import { Button } from "@material-ui/core";

const About = () => {
  return (
    <div>
      <Container className="container">
        <Row className="row">
          <Col className="image-container">
            <Image src={image2} rounded />
          </Col>
          <Col className="about-container">
            <h2 className="about-title">About</h2>
            <p className="about-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              maxime saepe eum, exercitationem quos qui amet aperiam placeat
              possimus pariatur quisquam officiis nobis quaerat dicta atque
              accusamus eius illum. Nisi?
            </p>
            <Button variant="contained" color="secondary">
              Download CV
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
