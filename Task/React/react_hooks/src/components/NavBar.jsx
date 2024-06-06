import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <Nav className="me-auto">
         
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Product</Nav.Link>
            <Nav.Link href="/Cart">Cart</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
