import React from "react";
import './Header.css'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Container >
        <Row>
          <Col xs={12}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/home" >Abidur Niloy</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav d-flex justify-content-end" className='justify-content-end float-right'>
                <Nav className="mr-auto navbar-link justify-content-end " variant="danger">
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/service">Service</Nav.Link>
                  <Nav.Link href="/project">Project</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
