import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="nav-link">
            <Navbar.Brand>SOSYAL SAHA</Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link" strict to="/home">
                Anasayfa
              </NavLink>
              <NavLink className="nav-link" strict to="/about">
                Hakkımızda
              </NavLink>
              <NavLink className="nav-link" strict to="/halisahalar">
                Halı Sahalar
              </NavLink>
            </Nav>
            <Nav>
              <NavLink className="nav-link" strict to="/login">
                Giriş/Kayıt ol
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
