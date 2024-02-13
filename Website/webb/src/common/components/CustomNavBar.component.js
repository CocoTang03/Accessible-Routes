import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import styles from './NavBar.module.css';

function CustomNavBar() {
  return (
    <Navbar bg="light" expand="lg" className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/">Accessible Routes</Navbar.Brand>
        <img width="45px" height="40px" alt="Accessible Routes logo" src="https://raw.githubusercontent.com/json-mp3/Accessible-Routes/main/Logo.png" />
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/issue" className={styles.navLink}>
              Report Issue
            </Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
  );
}

export default CustomNavBar;