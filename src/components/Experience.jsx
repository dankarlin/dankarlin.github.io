import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

function Experience() {
  const experiences = [
    {
      title: 'Chief Medical Officer',
      company: 'MindMed',
      period: '2022 - Present',
      description: 'Leading medical strategy and clinical development for breakthrough psychedelic medicines targeting brain health disorders. Overseeing clinical trials, regulatory strategy, and product development for innovative psychedelic therapies.',
      technologies: ['Psychedelic Medicine', 'Clinical Trials', 'Regulatory Affairs', 'Medical Strategy']
    },
    {
      title: 'Chair, Board of Directors',
      company: 'Digital Medicine Society (DiMe)',
      period: '2020 - Present',
      description: 'Leading the premier non-profit organization advancing the safe, effective, ethical, and equitable use of digital medicine to redefine healthcare and improve lives. Driving strategic initiatives in digital biomarkers and clinical research.',
      technologies: ['Digital Biomarkers', 'Healthcare Leadership', 'Strategic Planning', 'Board Governance']
    },
    {
      title: 'Attending Physician & Clinical Informaticist',
      company: 'Various Healthcare Systems',
      period: '2010 - 2022',
      description: 'Provided comprehensive psychiatric and addiction medicine care while pioneering clinical informatics implementations. Specialized in integrating technology solutions to improve patient outcomes and clinical workflows.',
      technologies: ['Psychiatry', 'Addiction Medicine', 'Clinical Informatics', 'Healthcare IT']
    },
    {
      title: 'Medical Education & Training',
      company: 'University of Colorado Anschutz',
      period: '2005 - 2010',
      description: 'Completed medical degree and specialized training in psychiatry. Developed foundational expertise in clinical medicine, research methodologies, and patient care that would later inform digital health innovations.',
      technologies: ['Medical Education', 'Clinical Research', 'Patient Care', 'Academic Medicine']
    }
  ]

  return (
    <section id="experience" className="py-5 bg-light" aria-label="Professional experience and career history">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">Professional Experience</h2>
            <div className="section-divider mb-5"></div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            {experiences.map((exp, index) => (
              <Card key={index} className="mb-4 shadow-sm">
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <Card.Title className="h4 text-primary">{exp.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted h5">{exp.company}</Card.Subtitle>
                      <Card.Text>{exp.description}</Card.Text>
                    </Col>
                    <Col md={4} className="text-md-end">
                      <Badge bg="secondary" className="mb-3">{exp.period}</Badge>
                      <div>
                        {exp.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} bg="primary" className="me-1 mb-1">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Experience