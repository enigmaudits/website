import { Container, Row, Col, Card } from 'react-bootstrap'
import { BsCashCoin, BsSafe, BsPeople, BsPerson } from 'react-icons/all'
import clsx from 'classnames'

import Section from '../../components/Section'

import './AchivementsSection.css';

const achivements = [
  {
    number: '200+',
    title: 'Clients',
    icon: BsPerson,
    textStyle: 'warning',
    iconStyle: 'warning',
  },
  {
    number: '$100m+',
    title: 'Saved funds',
    icon: BsCashCoin,
    textStyle: 'white',
    iconStyle: 'warning',
  },
  {
    number: '500+',
    title: 'Audited Contracts',
    icon: BsSafe,
    textStyle: 'info',
    iconStyle: 'warning',
  },
  {
    number: '100+',
    title: 'Partners',
    icon: BsPeople,
    textStyle: 'success',
    iconStyle: 'warning',
  },
]

const StatsCard: React.FC<any> = ({
  title,
  icon: Icon,
  textStyle,
  iconStyle,
  number,
  className,
}) => (
  <Card className={clsx('card-stats', className)}>
    <Card.Body>
      <Row>
        <Col xs={5} md={4}>
          <div className={clsx('icon-big', 'text-center', `icon-${iconStyle}`)}>
            <Icon className={`text-${textStyle}`} />
          </div>
        </Col>
        <Col xs={7} md={8}>
          <div className="numbers">
            <strong className="card-title">{number}</strong>
            <p className="card-category">{title}</p>
          </div>
        </Col>
      </Row>
    </Card.Body>
  </Card>
)

const AchivementsSection = () => {
  return (
    <Section id="why-we" lg white>
        <img src="./images/path4.png" className="path" />
        <Container>
          <Row className="row-grid justify-content-between">
            <Col md={5} className="mt-lg-5">
              <Row>
                <Col lg={6} sm={12} className="px-2 py-2">
                  <StatsCard {...achivements[0]} />
                </Col>
                <Col lg={6} sm={12} className="px-2 py-2">
                  <StatsCard {...achivements[1]} />
                </Col>
              </Row>
              <Row>
                <Col lg={6} sm={12} className="px-2 py-2">
                  <StatsCard className="upper bg-default" {...achivements[2]} />
                </Col>
                <Col lg={6} sm={12} className="px-2 py-2">
                  <StatsCard {...achivements[3]} />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <div className="pl-md-5">
                <h2 className="achivements-section__title">
                  EnigmAudit Achivements
                </h2>
                <p className="achivements-section__text">
                Our main task is to warn investors and project developers about possible dangers and vulnerabilities in order to prevent the loss of funds and theft of personal data.
                </p>
                <p className="achivements-section__text">
                Your safety is our top priority
                </p>
              </div>
            </Col>
          </Row>
        </Container>
    </Section>
  )
}

export default AchivementsSection
