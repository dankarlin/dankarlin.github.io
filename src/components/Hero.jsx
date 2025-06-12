import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import ProfilePhoto from './ProfilePhoto'

function Hero() {
  return (
    <section id="home" className="hero-section bg-primary text-white py-5" aria-label="Introduction and hero section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={10} className="mx-auto">
            <Row className="align-items-center">
              <Col md={6} className="text-center text-md-start">
                <div className="fade-in">
                  <h1 className="display-3 fw-bold mb-4">Dan Karlin</h1>
                  <p className="h3 mb-4" role="heading" aria-level="2">Chief Medical Officer & Digital Medicine Innovator</p>
                  <p className="lead mb-4">
                    Board-certified physician specializing in digital medicine, clinical informatics, and healthcare innovation. 
                    Leading the development of psychedelic medicines for brain health disorders at MindMed.
                  </p>
                  <div className="section-divider d-none d-md-block"></div>
                  <div className="d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
                    <a 
                      href="#about" 
                      className="btn btn-outline-light btn-lg mb-2 text-decoration-none"
                      role="button"
                      aria-label="Navigate to About section to learn more about Dr. Dan Karlin"
                    >
                      <i className="bi bi-person-circle me-2" aria-hidden="true"></i>
                      Learn More About Me
                    </a>
                    <a 
                      href="#contact" 
                      className="btn btn-outline-light btn-lg mb-2 text-decoration-none"
                      role="button"
                      aria-label="Navigate to Contact section to get in touch with Dr. Dan Karlin"
                    >
                      <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                      Get In Touch
                    </a>
                  </div>
                </div>
              </Col>
              <Col md={6} className="text-center">
                <div className="fade-in">
                  {/* Professional Photo from LinkedIn */}
                  <ProfilePhoto 
                    src="https://media.licdn.com/dms/image/v2/D4E03AQE5RE2GaIroLg/profile-displayphoto-shrink_200_200/B4EZbwtTcsHAAc-/0/1747795131282?e=2147483647&v=beta&t=pF2Zzbze2OnJmNioI4wag_TJkqzk3ssHBhtPD2w9Lms"
                    alt="Dr. Dan Karlin - Chief Medical Officer"
                    className="mb-4"
                  />
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <div className="text-center">
                      <div className="h4 mb-1">25+</div>
                      <small className="text-light opacity-75">Years Experience</small>
                    </div>
                    <div className="text-center">
                      <div className="h4 mb-1">CMO</div>
                      <small className="text-light opacity-75">at MindMed</small>
                    </div>
                    <div className="text-center">
                      <div className="h4 mb-1">NYC</div>
                      <small className="text-light opacity-75">Based</small>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Hero