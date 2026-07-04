import React from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'

function Speaking() {
  const appearances = [
    {
      title: 'J.P. Morgan Healthcare Conference',
      role: 'Presenter',
      date: 'January 2026',
      venue: 'San Francisco, CA',
      description: 'Presented as CMO on Definium Therapeutics\' clinical pipeline and the development of MM-120 (Lysergide Tartrate) for generalized anxiety disorder.',
      type: 'conference',
      link: null
    },
    {
      title: 'APA Annual Meeting — RAMHT Event',
      role: 'Invited Speaker',
      date: '2026',
      venue: 'American Psychiatric Association',
      description: 'Invited speaker at the Research in Addiction Medicine & Health Technologies (RAMHT) event at the APA Annual Meeting.',
      type: 'conference',
      link: null
    },
    {
      title: 'The Frontier Psychiatrists',
      role: 'Featured Interview',
      date: 'February 2026',
      venue: 'Substack / Podcast',
      description: 'In-depth interview on generalized anxiety disorder treatment with lysergide, discussing Phase IIb results, trial design, and the future of psychedelic therapeutics in psychiatry.',
      type: 'media',
      link: 'https://thefrontierpsychiatrists.substack.com/p/the-complete-interview-with-dan-karlin'
    },
    {
      title: 'World Medical Innovation Forum',
      role: 'Speaker',
      date: 'September 2024',
      venue: 'Boston, MA',
      topic: 'Therapeutic Psychedelics – Opportunities and Impact',
      description: 'Delivered a talk on the therapeutic opportunities and clinical impact of psychedelic medicines in brain health disorders.',
      type: 'conference',
      link: 'https://2024.worldmedicalinnovation.org/speaker/daniel-karlin-md/'
    },
    {
      title: 'APA Annual Meeting',
      role: 'Scientific Presenter',
      date: 'May 2024',
      venue: 'New York, NY',
      description: 'Presented poster: "Rapid and Durable Response to a Single Dose of MM-120 (Lysergide) in Generalized Anxiety Disorder" — Phase IIb efficacy and durability data.',
      type: 'conference',
      link: null
    },
    {
      title: 'Ordinary Unhappiness Podcast',
      role: 'Guest',
      date: '2024',
      topic: 'LSD: Subjectivity, Ineffability, and Mental Health',
      description: 'Conversation on drug development, neuroscience, psychiatry, and the philosophical dimensions of psychedelic treatment.',
      type: 'podcast',
      link: 'https://ordinaryunhappiness.buzzsprout.com/2131830/episodes/18145404-121-lsd-subjectivity-ineffability-and-mental-health-feat-dan-karlin'
    },
    {
      title: 'BioSpace Q&A',
      role: 'Interview',
      date: '2023',
      description: 'Featured interview discussing Phase II clinical results for MM-120 and the broader therapeutic potential of psychedelics in psychiatry.',
      type: 'media',
      link: 'https://www.biospace.com/q-and-a-mindmed-s-dan-karlin-discusses-phase-ii-win-and-the-therapeutic-potential-of-psychedelics'
    }
  ]

  const typeBadge = {
    conference: { bg: 'primary', label: 'Conference' },
    podcast: { bg: 'success', label: 'Podcast' },
    media: { bg: 'secondary', label: 'Media' }
  }

  return (
    <section id="speaking" className="py-5" aria-label="Speaking engagements and media appearances">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">Speaking & Media</h2>
            <div className="section-divider mb-5"></div>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            {appearances.map((item, index) => (
              <Card key={index} className="mb-4 shadow-sm">
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <div className="d-flex align-items-start gap-2 mb-1 flex-wrap">
                        <Card.Title className="h5 text-primary mb-0">{item.title}</Card.Title>
                        <Badge bg={typeBadge[item.type].bg} className="flex-shrink-0">
                          {typeBadge[item.type].label}
                        </Badge>
                      </div>
                      {item.topic && (
                        <p className="text-muted fst-italic mb-2 small">"{item.topic}"</p>
                      )}
                      <Card.Text className="mb-2">{item.description}</Card.Text>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm text-decoration-none"
                          aria-label={`View ${item.title} (opens in new tab)`}
                        >
                          <i className="bi bi-box-arrow-up-right me-1" aria-hidden="true"></i>
                          View
                        </a>
                      )}
                    </Col>
                    <Col md={4} className="text-center text-md-end mt-3 mt-md-0">
                      <Badge bg="secondary" className="mb-2 d-block">{item.date}</Badge>
                      {item.venue && (
                        <small className="text-muted d-block">
                          <i className="bi bi-geo-alt me-1" aria-hidden="true"></i>
                          {item.venue}
                        </small>
                      )}
                      <small className="text-muted d-block mt-1">
                        <i className="bi bi-person me-1" aria-hidden="true"></i>
                        {item.role}
                      </small>
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

export default Speaking
