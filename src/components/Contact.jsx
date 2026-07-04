import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Contact() {
  return (
    <section id="contact" className="py-5" aria-label="Contact information and social media links">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-5">Get In Touch</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={8}>
            <Card className="shadow">
              <Card.Body className="p-5">
                <div className="text-center">
                  <h3 className="mb-4">Let's Connect</h3>
                  <p className="lead mb-4">
                    I'm always interested in discussing healthcare innovation, 
                    digital medicine opportunities, or connecting with fellow healthcare professionals and researchers.
                  </p>
                  
                  <div className="d-flex flex-column flex-md-row gap-3 justify-content-center mb-4">
                    <a 
                      href="https://linkedin.com/in/dankarlin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary d-flex align-items-center justify-content-center text-decoration-none"
                      style={{fontSize: '0.9rem', padding: '10px 20px'}}
                      aria-label="Visit Dr. Dan Karlin's LinkedIn profile (opens in new tab)"
                    >
                      <i className="bi bi-linkedin me-2" aria-hidden="true"></i>
                      LinkedIn
                    </a>
                    
                    <a
                      href="https://bsky.app/profile/dankarlin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary d-flex align-items-center justify-content-center text-decoration-none"
                      style={{fontSize: '0.9rem', padding: '10px 20px'}}
                      aria-label="Visit Dr. Dan Karlin's Bluesky profile (opens in new tab)"
                    >
                      <i className="bi bi-cloud me-2" aria-hidden="true"></i>
                      Bluesky
                    </a>
                  </div>
                  
                  <div className="text-muted">
                    <p className="mb-1">
                      <i className="bi bi-geo-alt me-2"></i>
                      New York, NY
                    </p>
                    <p className="mb-0">
                      <i className="bi bi-briefcase me-2"></i>
                      Chief Medical Officer at Definium Therapeutics
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact