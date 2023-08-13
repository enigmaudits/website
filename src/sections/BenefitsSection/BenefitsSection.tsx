import { Container, Row, Col } from 'react-bootstrap'
import { BsPerson, BsGraphUp, BsCashStack } from 'react-icons/bs'

import Section from '../../components/Section'

const Info: React.FC<any> = ({ title, children, style, icon: Icon }) => (
  <div className="info">
    <div className={`icon icon-${style}`}>
      <Icon size={30} />
    </div>
    <h4 className="info-title">{title}</h4>
    <hr className={`line-${style}`} />
    {children}
  </div>
)

const BenefitsSection = () => {
  return (
    <Section lg>
      <img src="./images/path4.png" className="path" />
      <img src="./images/path5.png" className="path2" />
      <img src="./images/path2.png" className="path3" />
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="text-center">Your benefits</h2>
            <Row className="row-grid justify-content-center">
              <Col lg={3}>
                <Info icon={BsCashStack} title="Low Price" style="primary">
                  <p>We have some of the best prices among cyber security companies</p>
                </Info>
              </Col>
              <Col lg={3}>
                <Info icon={BsGraphUp} title="Fast Delivery" style="warning">
                  <p>We provide audits within a few hours without any loss of its quality</p>
                </Info>
              </Col>
              <Col lg={3}>
                <Info icon={BsPerson} title="Big Experience" style="success">
                  <p>Our team has 5+ years of experience in smart contracts and blockchains auditing</p>
                </Info>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default BenefitsSection
