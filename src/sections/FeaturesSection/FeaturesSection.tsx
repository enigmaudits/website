import clsx from 'classnames'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { BsPerson, BsClock, BsTwitter, BsGithub } from 'react-icons/bs'

import Section from '../../components/Section'

import './FeaturesSection.css';

type FeatureCardProps = {
  title: string
  style: 'danger' | 'info' | 'default' | 'success'
  children: any
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  style,
  children,
}) => (
  <Card className={clsx('card-stats', `bg-${style}`)}>
    <Card.Body>
      <div className="justify-content-center">
        <div className="numbers">
          <p className="card-title">{title}</p>
          <p className="card-category text-white">{children}</p>
        </div>
      </div>
    </Card.Body>
  </Card>
)

const featureDescriptions = [
  {
    icon: BsPerson,
    title: '24/7 Support',
  },
  {
    icon: BsClock,
    title: 'Personal Communication',
  },
  {
    icon: BsTwitter,
    title: 'Twitter post',
  },
  {
    icon: BsGithub,
    title: 'Github certification'
  }
]

type FeatureDescriptionProps = {
  title: string
  icon: any
}

const FeatureDescription: React.FC<FeatureDescriptionProps> = ({
  icon: Icon,
  title,
}) => (
  <div className="d-flex align-items-center">
    <div className="icon icon-success mb-2">
      <Icon />
    </div>
    <div className="ml-3">
      <h6>{title}</h6>
    </div>
  </div>
)

const FeaturesSection = () => (
  <Section className="section-safe features-section" white>
    <img src="./images/path5.png" className="path" />
    <Container>
      <Row className="row-grid justify-content-between">
        <Col md={5}>
          <img
            src="./images/crypto-machine.png"
            className="img-fluid floating"
          />
          <FeatureCard style="danger" title="99.99%">
            Safe
          </FeatureCard>
          <FeatureCard style="info" title="1000K+">
            Reviewed Code Lines
          </FeatureCard>
          <FeatureCard style="success" title="10 435">
            Business
          </FeatureCard>
        </Col>
        <Col md={6}>
          <div className="px-md-5">
            <hr className="line-success" />
            <h3 className="features-section__title">Awesome features</h3>
            <p className="features-section__text">
            With ordering our services you also get an useful bundle:
            </p>
            <ul className="list-unstyled mt-5">
              {featureDescriptions.map((item, index) => (
                <li key={index} className="py-2">
                  <FeatureDescription {...item} />
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  </Section>
)

export default FeaturesSection
