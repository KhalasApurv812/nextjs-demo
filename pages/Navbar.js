import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navbars() {
  return (
    <>
      <br />
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/product">Product</Nav.Link>
            <Nav.Link href="/destination">Destination</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
