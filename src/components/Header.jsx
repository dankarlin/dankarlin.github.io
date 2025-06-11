import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" role="navigation" aria-label="Main navigation">
        <Container>
          <Navbar.Brand href="#home" aria-label="Dan Karlin - Go to home section">Dan Karlin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label="Toggle navigation menu" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" as="nav">
              <Nav.Link href="#home" aria-label="Navigate to home section">Home</Nav.Link>
              <Nav.Link href="#about" aria-label="Navigate to about section">About</Nav.Link>
              <Nav.Link href="#experience" aria-label="Navigate to experience section">Experience</Nav.Link>
              <Nav.Link href="#research" aria-label="Navigate to research section">Research</Nav.Link>
              <Nav.Link href="#contact" aria-label="Navigate to contact section">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header