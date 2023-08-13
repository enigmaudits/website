import { Row, Col, Card, Button, Container } from 'react-bootstrap'

import Section from '../../components/Section'

const plans = [
  {
    imageSrc: './images/riddle-box.png',
    title: 'Easy Riddle',
    terms: ['up to 500 lines', '24/7 Support', 'from $100'],
  },
  {
    imageSrc: './images/riddle-box-2.png',
    title: 'Hard Riddle',
    terms: ['500+ lines', '24/7 Support', 'from $500'],
  },
  {
    imageSrc: './images/riddle-box-3.png',
    title: 'Mega Hard Riddle',
    terms: ['1500+ lines', '24/7 Support', 'from $1500'],
  },
]

type PlanCardProps = {
  title: string
  imageSrc: string
  style: 'primary' | 'success' | 'danger' | 'info'
  terms: string[]
}

const PlanCard: React.FC<PlanCardProps> = ({ imageSrc, title, style, terms }) => (
  <Card className="card-coin card-plain">
    <Card.Header>
      {imageSrc && (
        <img src={imageSrc} className="img-center img-fluid" />
      )}
    </Card.Header>
    <Card.Body>
      <div className="row">
        <div className="col-md-12 text-center">
          <h4 className="text-uppercase">{title}</h4>
          <span>Plan</span>
          <hr className={`line-${style}`} />
        </div>
      </div>
      <div className="row">
        <ul className="list-group">
          {terms.map((t, i) => (
            <li key={i} className="list-group-item">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Card.Body>
    <Card.Footer className="text-center">
      <Button as="a" href="https://forms.gle/QScihyf6DUJgoPCZ6" target="_blank" rel="noopener" variant={style} className="btn-simple">
        Order
      </Button>
    </Card.Footer>
  </Card>
)

const PlansSection = () => {
  return (
    <Section className="section-coins">
      <img src="./images/path3.png" className="path" />
      <Container>
        <Row>
          <Col>
            <hr className="line-info" />
            <h2>
              Choose the plan{' '}<span className="text-info">that fits your needs</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <PlanCard {...plans[0]} style="primary" />
          </Col>
          <Col md={4}>
            <PlanCard {...plans[1]} style="success" />
          </Col>
          <Col md={4}>
            <PlanCard {...plans[2]} style="info" />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default PlansSection
