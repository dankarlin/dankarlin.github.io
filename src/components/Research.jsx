import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

function Research() {
  const publications = [
    {
      title: 'Single treatment with MM120 (lysergide) in generalized anxiety disorder: a randomized clinical trial',
      journal: 'JAMA',
      year: 2025,
      citations: 20
    },
    {
      title: 'Digital medicine: a primer on measurement',
      journal: 'Digital Biomarkers',
      year: 2019,
      citations: 194
    },
    {
      title: 'Implementing precision methods in personalizing psychological therapies: Barriers and possible ways forward',
      journal: 'Behaviour Research and Therapy',
      year: 2024,
      citations: 129
    },
    {
      title: 'mHealth and wearable technology should replace motor diaries to track motor fluctuations in Parkinson\'s disease',
      journal: 'NPJ Digital Medicine',
      year: 2020,
      citations: 127
    },
    {
      title: 'Continuous sound collection using smartphones and machine learning to measure cough',
      journal: 'Digital Biomarkers',
      year: 2020,
      citations: 91
    },
    {
      title: 'A systematic review of feasibility studies promoting the use of mobile technologies in clinical research',
      journal: 'NPJ Digital Medicine',
      year: 2019,
      citations: 67
    },
    {
      title: 'Biometric monitoring devices for assessing end points in clinical trials: developing an ecosystem',
      journal: 'Nature Reviews Drug Discovery',
      year: 2017,
      citations: 43
    }
  ]

  const researchAreas = [
    {
      title: 'Digital Medicine & Biomarkers',
      description: 'Advancing the development and validation of digital biomarkers for brain health disorders and neurological conditions.',
      icon: 'bi-graph-up'
    },
    {
      title: 'Clinical Informatics',
      description: 'Integrating healthcare technology and data science to improve clinical decision-making and patient outcomes.',
      icon: 'bi-cpu'
    },
    {
      title: 'Psychedelic Medicine',
      description: 'Pioneering research in psychedelic medicines for treatment-resistant brain health disorders.',
      icon: 'bi-heart-pulse'
    },
    {
      title: 'Healthcare Innovation',
      description: 'Developing novel approaches to clinical trials, regulatory science, and psychedelic medicine development.',
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
            <h3 className="text-center mb-4">Selected Publications</h3>
            <div className="section-divider mb-4"></div>
            {publications.map((pub, index) => (
              <div key={index} className={`py-3 ${index < publications.length - 1 ? 'border-bottom' : ''}`}>
                <p className="mb-1 fw-semibold">{pub.title}</p>
                <div className="d-flex gap-3 flex-wrap align-items-center">
                  <small className="text-primary fw-medium">{pub.journal}</small>
                  <small className="text-muted">{pub.year}</small>
                  <Badge bg="light" text="dark" className="fw-normal border">
                    <i className="bi bi-chat-quote me-1" aria-hidden="true"></i>{pub.citations} citations
                  </Badge>
                </div>
              </div>
            ))}
            <div className="text-center mt-4">
              <a
                href="https://scholar.google.com/citations?user=mCflbZoAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary btn-sm text-decoration-none"
                aria-label="View all publications on Google Scholar (opens in new tab)"
              >
                <i className="bi bi-mortarboard me-2" aria-hidden="true"></i>
                View all publications on Google Scholar
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Research