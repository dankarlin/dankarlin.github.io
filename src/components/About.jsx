import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function About() {
  const skills = [
    { category: 'Medical Specialties', items: ['Psychiatry', 'Addiction Medicine', 'Clinical Informatics', 'Digital Medicine'] },
    { category: 'Healthcare Technology', items: ['Digital Biomarkers', 'Clinical Trials', 'Healthcare IT', 'Medical Devices'] },
    { category: 'Leadership & Innovation', items: ['Strategic Planning', 'Team Leadership', 'Product Development', 'Regulatory Affairs'] },
    { category: 'Research & Academia', items: ['Clinical Research', 'Medical Publications', 'Conference Speaking', 'Medical Education'] }
  ]

  return (
    <section id="about" className="py-5" aria-label="About Dan Karlin and professional background">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <h2 className="text-center mb-5">About Me</h2>
            <div className="text-center mb-5">
              <p className="lead">
                I'm a board-certified physician and healthcare innovator with expertise in psychiatry, 
                addiction medicine, and clinical informatics. As Chief Medical Officer at MindMed, 
                I lead the development of breakthrough digital therapeutics for mental health and addiction.
              </p>
              <p>
                My career bridges traditional medicine with cutting-edge technology. I'm passionate about 
                leveraging digital biomarkers, clinical informatics, and innovative trial designs to 
                transform patient care. As Chair of the Digital Medicine Society (DiMe) Board and recipient 
                of "40 Under 40 Healthcare Innovators" recognition, I'm committed to advancing the field 
                of digital health through research, leadership, and clinical excellence. My research portfolio 
                includes peer-reviewed publications in digital medicine, clinical informatics, and psychiatric innovation.
              </p>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <h3 className="text-center mb-4">Areas of Expertise</h3>
            <div className="section-divider"></div>
            <Row>
              {skills.map((skillGroup, index) => (
                <Col md={6} lg={3} key={index} className="mb-4">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="h5 text-primary">{skillGroup.category}</Card.Title>
                      <ul className="list-unstyled">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <li key={skillIndex} className="mb-1">
                            <small>{skill}</small>
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About