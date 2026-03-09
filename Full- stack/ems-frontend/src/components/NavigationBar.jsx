import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar variant="dark" expand="sm" style={{
      background: "black",
      boxShadow: "4px 6px 12px rgba(0,0,0,0.4)",
      paddingTop: "20px", 
      paddingBottom: "20px", 
    }}>
      <Container >
        <Navbar.Brand href="/"><img style={{
                 width:"300px"
                  
                }}src="./logo.png" alt="Facebook" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="collapsibleNavbar" />
        <Navbar.Collapse id="collapsibleNavbar">
          <Nav className="me-auto d-flex p-2">
          <li className="nav-item ml-auto p-2">
              <a
                className="nav-link mx-2 active "
                aria-current="page"
                href="/HomePage"
                style={{
                  borderRadius: "6px",
                  background: "linear-gradient(145deg, #FBFCFC, #FBFCFC)",
                  boxShadow:
                    "4px 4px 8px #FB0417, -4px -4px 8px #FB0417",
                  color: "black",
                  fontFamily: "Cabin, sans-serif",
                  fontSize: "20px",
                  
                }}
              >
                Home
              </a>
            </li>
          <li className="nav-item">
              <a
                className="nav-link mx-2 text-light link-hover"
                href="/Alart"
                style={{
                  fontFamily: "Cabin, sans-serif",
                  fontSize: "20px",
                }}
              >
                Alarts
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link mx-2 text-light link-hover"
                href="/DesastersMap"
                style={{
                  fontFamily: "Cabin, sans-serif",
                  fontSize: "20px",
                }}
              >
                Map
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link mx-2 text-light link-hover"
                href="/Educated"
                style={{
                  fontFamily: "Cabin, sans-serif",
                  fontSize: "20px",
                }}
              >
                Be Educated
              </a>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
