import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { subpages } from '../data/subpages'

function Footer() {
  return (
    <footer className="bg-dark text-white py-5 footer-section">
      <Container>
        <Row className="gy-4">
          <Col md={5} lg={4}>
            <h3 className="h5 mb-3 fw-bold text-white tracking-wide">Dan Karlin</h3>
            <p className="text-muted small mb-4 footer-bio" style={{ maxWidth: '320px', lineHeight: '1.6' }}>
              Board-certified physician and Chief Medical Officer, specializing in digital medicine, clinical informatics, and psychedelic therapeutics for brain health.
            </p>
            <div className="d-flex gap-3 footer-socials">
              <a 
                href="https://twitter.com/dankarlin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Twitter Profile"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a 
                href="https://bsky.app/profile/dankarlin.com"
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="Bluesky Profile"
              >
                <i className="bi bi-cloud"></i>
              </a>
              <a 
                href="https://linkedin.com/in/dankarlin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-link"
                aria-label="LinkedIn Profile"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </Col>
          
          <Col md={3} lg={3} className="ms-auto col-6">
            <h4 className="h6 text-uppercase tracking-wider text-secondary-light mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>
              Navigation
            </h4>
            <ul className="list-unstyled footer-nav-links mb-0">
              <li className="mb-2"><a href="#home" className="footer-link">Home</a></li>
              <li className="mb-2"><a href="#about" className="footer-link">About</a></li>
              <li className="mb-2"><a href="#experience" className="footer-link">Experience</a></li>
              <li className="mb-2"><a href="#research" className="footer-link">Research</a></li>
              <li className="mb-2"><a href="#speaking" className="footer-link">Speaking</a></li>
              <li className="mb-2"><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </Col>
          
          <Col md={4} lg={4} className="col-6">
            <h4 className="h6 text-uppercase tracking-wider text-secondary-light mb-3" style={{ fontSize: '0.75rem', letterSpacing: '0.15em' }}>
              Digital Lab
            </h4>
            <ul className="list-unstyled footer-lab-links mb-0">
              {subpages.map((subpage, index) => (
                <li key={index} className="mb-3">
                  <a href={subpage.path} className="footer-lab-link d-flex align-items-start gap-2 text-decoration-none" aria-label={`Open ${subpage.title}`}>
                    <i className={`bi ${subpage.icon} mt-1`} aria-hidden="true"></i>
                    <div>
                      <span className="d-block footer-lab-title">{subpage.title}</span>
                      <span className="footer-lab-tag">{subpage.tag}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
        
        <hr className="my-4 border-secondary opacity-25" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-muted small">&copy; {new Date().getFullYear()} Dan Karlin. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end mt-2 mt-md-0">
            <a href="#home" className="back-to-top-link text-muted text-decoration-none small" aria-label="Scroll to top of the page">
              Back to top <i className="bi bi-arrow-up-short ms-1" aria-hidden="true"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer