import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p className="mb-2">&copy; {new Date().getFullYear()} Dan Karlin. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              <a 
                href="https://twitter.com/dankarlin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a 
                href="https://linkedin.com/in/dankarlin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a 
                href="mailto:dankarlin@gmail.com"
                className="text-white text-decoration-none"
              >
                <i className="bi bi-envelope"></i> Email
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer