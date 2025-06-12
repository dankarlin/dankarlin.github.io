import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

function Research() {
  const researchAreas = [
    {
      title: 'Digital Medicine & Biomarkers',
      description: 'Advancing the development and validation of digital biomarkers for psychiatric and neurological conditions.',
      icon: 'bi-graph-up'
    },
    {
      title: 'Clinical Informatics',
      description: 'Integrating healthcare technology and data science to improve clinical decision-making and patient outcomes.',
      icon: 'bi-cpu'
    },
    {
      title: 'Psychedelic Medicine',
      description: 'Pioneering research in psychedelic-assisted therapies for treatment-resistant psychiatric conditions.',
      icon: 'bi-heart-pulse'
    },
    {
      title: 'Healthcare Innovation',
      description: 'Developing novel approaches to clinical trials, regulatory science, and digital therapeutics.',
      icon: 'bi-lightbulb'
    }
  ]

  return (
    <section id="research" className="py-5" aria-label="Research areas and academic publications">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-5">Research & Publications</h2>
          </Col>
        </Row>
        
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="section-divider"></div>
            <p className="lead">
              My research focuses on the intersection of medicine and technology, with particular emphasis on 
              digital biomarkers, clinical informatics, and innovative therapeutic approaches.
            </p>
            <div className="d-flex justify-content-center gap-3 mb-4">
              <a 
                href="https://scholar.google.com/citations?user=mCflbZoAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary d-flex align-items-center text-decoration-none"
                aria-label="Visit Dr. Dan Karlin's Google Scholar profile (opens in new tab)"
              >
                <i className="bi bi-mortarboard me-2" aria-hidden="true"></i>
                Google Scholar Profile
              </a>
              <a 
                href="https://pubmed.ncbi.nlm.nih.gov/?term=Karlin+DR%5BAuthor%5D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary d-flex align-items-center text-decoration-none"
                aria-label="Search Dr. Dan Karlin's publications on PubMed (opens in new tab)"
              >
                <i className="bi bi-journal-medical me-2" aria-hidden="true"></i>
                PubMed Publications
              </a>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <h3 className="text-center mb-4">Research Areas</h3>
            <Row>
              {researchAreas.map((area, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="h-100 border-0 shadow-sm">
                    <Card.Body className="text-center p-4">
                      <div className="mb-3">
                        <i className={`${area.icon} text-primary`} style={{fontSize: '2.5rem'}}></i>
                      </div>
                      <Card.Title className="h5 text-primary mb-3">{area.title}</Card.Title>
                      <Card.Text className="text-muted">{area.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg={10} className="mx-auto">
            <Card className="bg-light border-0">
              <Card.Body className="p-4">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h4 className="mb-3">Academic Impact</h4>
                    <p className="mb-2">
                      My research contributions span multiple domains of digital medicine, with publications in 
                      peer-reviewed journals and presentations at major medical conferences.
                    </p>
                    <div className="d-flex gap-3 flex-wrap">
                      <Badge bg="primary" className="p-2">Digital Biomarkers</Badge>
                      <Badge bg="primary" className="p-2">Clinical Trials</Badge>
                      <Badge bg="primary" className="p-2">Healthcare Technology</Badge>
                      <Badge bg="primary" className="p-2">Psychiatry</Badge>
                    </div>
                  </Col>
                  <Col md={4} className="text-center">
                    <div className="d-flex flex-column gap-2">
                      <div>
                        <h5 className="text-primary mb-1">Research Focus</h5>
                        <small className="text-muted">Digital Medicine & Clinical Innovation</small>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Research