import { Container, Row, Col } from 'react-bootstrap';

import { LogoHorizontal } from '../Logo';

import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <Container>
      <Row>
        <Col md={3}>
          <LogoHorizontal className="footer-logo" />
        </Col>
        <Col md={6}>
        </Col>
        <Col md={3}>
          <div>
            Email: 
            {" "}
            <a className="footer-email" href="mailto:contact@enigmaudits.com">
              contact@enigmaudits.com
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
