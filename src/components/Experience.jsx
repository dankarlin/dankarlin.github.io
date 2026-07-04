import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

function Experience() {
  const experiences = [
    {
      title: 'Chief Medical Officer',
      company: 'Definium Therapeutics (formerly MindMed)',
      period: '2021 – Present',
      description: 'Leading medical strategy and clinical development for MM-120 (Lysergide Tartrate), a novel therapeutic for generalized anxiety disorder and other brain health conditions. Overseeing Phase IIb–III clinical trials, regulatory affairs, and medical team.',
      tags: ['Psychedelic Medicine', 'Clinical Trials', 'Regulatory Affairs', 'Psychiatry']
    },
    {
      title: 'Chair, Board of Directors',
      company: 'Digital Medicine Society (DiMe)',
      period: '2020 – Present',
      description: 'Co-founder and Board Chair of the leading non-profit advancing the safe, effective, ethical, and equitable use of digital medicine. Drives strategic direction and collaborative initiatives in digital biomarkers, clinical research, and healthcare policy.',
      tags: ['Digital Biomarkers', 'Healthcare Policy', 'Board Governance', 'Non-profit Leadership']
    },
    {
      title: 'Co-Founder & CEO',
      company: 'HealthMode',
      period: 'Acquired 2021',
      description: 'Founded and led a digital measurement technology company developing novel tools for clinical research and medicine. Built the scientific, clinical, and regulatory foundation leading to acquisition by Mind Medicine (MindMed) in February 2021.',
      tags: ['Digital Measurement', 'Clinical Research', 'Startup Leadership']
    },
    {
      title: 'Chief Medical Officer',
      company: 'NightWare',
      period: 'FDA Clearance, 2020',
      description: 'Led medical strategy and clinical development for a wearable digital therapeutic for PTSD-related nightmares. Guided the product to FDA De Novo clearance — among the first cleared digital therapeutics for a psychiatric indication.',
      tags: ['Digital Therapeutics', 'PTSD', 'FDA Regulatory', 'Wearables']
    },
    {
      title: 'Head of Digital Medicine Clinical, Informatics & Regulatory Strategy',
      company: 'Pfizer',
      period: 'Pre-2021',
      description: 'Built and led clinical, informatics, and regulatory strategy for Pfizer\'s Digital Medicine and Innovation Research Lab. Also served as Global Clinical Lead for psychiatry clinical compounds and Senior Director, Quantitative Medicine in Pfizer\'s Neuroscience Research Unit.',
      tags: ['Digital Biomarkers', 'Pharma R&D', 'Neuroscience', 'Regulatory Science']
    },
    {
      title: 'Co-Founder & Chief Medical Officer',
      company: 'Column Health',
      period: 'Co-Founder',
      description: 'Co-founded a technology-enabled psychiatry and addiction treatment practice, building clinical infrastructure and medical leadership for an integrated care delivery model combining human expertise with digital tools.',
      tags: ['Psychiatry', 'Addiction Medicine', 'Digital Health', 'Clinical Operations']
    },
    {
      title: 'Assistant Professor of Psychiatry',
      company: 'Tufts University School of Medicine',
      period: 'Academic Faculty',
      description: 'Faculty member serving as Director of Psychiatry Informatics and Associate Training Director. Teaching, research, and clinical leadership at the intersection of psychiatry, informatics, and medical education.',
      tags: ['Medical Education', 'Clinical Informatics', 'Psychiatry', 'Academic Medicine']
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
                    <Col md={4} className="text-center text-md-end">
                      <Badge bg="secondary" className="mb-3">{exp.period}</Badge>
                      <div>
                        {exp.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} bg="primary" className="me-1 mb-1">
                            {tag}
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