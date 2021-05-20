import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Hero/Hero.css";
import Typed from "react-typed";
import { Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import HeaderImage from "../HeaderImage/HeaderImage";

const Hero = () => {
  return (
    <div id='section-header'>
      <Container className='hero-wrap'>
        <Row>
          <Col>
            <div className="Hero-header">
              <h3 className='hero-header-h3 helloIam'>Hello, I'm </h3>
              <div className="typed-edit">
                <Typed
                  strings={[
                    "Abidur Niloy",
                    "React Learner",
                    "Junior Front End Developer",
                    "Programmer Dreamer",
                    "ERROR Lover",
                  ]}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                />

                <br />
                <Button variant="contained" color="primary">
                  {" "}
                  MORE ABOUT ME <ArrowRightAltIcon />
                </Button>
                <Button
                  className="btn-hire-me"
                  variant="contained"
                  color="primary"
                >
                  {" "}
                  HIRE ME <ArrowRightAltIcon />
                </Button>
                <p className='hero-copyright'>
                  Copyright ©2021 All rights reserved | This template is made
                  with by NIloy
                </p>
              </div>
            </div>
          </Col>
          <Col >
            <HeaderImage />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
