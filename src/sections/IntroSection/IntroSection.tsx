import { Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

import { LogoVertical } from "../../components/Logo"

import './IntroSection.css'

const IntroSection = () => (
    <div className="intro-section page-header">
      <div className="content-center">
        <Row className="row-grid justify-content-between">
          <Col lg={5} md={6}>
            <LogoVertical className="intro-section__logo" />
            <h1 className="text-white">
              WE KEEP YOU SECURED
            </h1>
            <p className="text-white mb-3">
            We provide blockchain and smart contracts audit services. Our team consists of leading blockchain experts and smart contract analysts who conduct in-depth audits of smart contracts and blockchain ecosystems, using the most relevant security and auditing standards for this.
            </p>
            <div className="btn-wrapper">
              <div className="button-container">
                <a href="https://forms.gle/QScihyf6DUJgoPCZ6" target="_blank" rel="noopener" className="btn btn-success">
                  Request an audit
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} md={5}>
            <img
              src="./images/detective.png"
              // src="./images/cipher-abstract.png"
              alt="Circle image"
              className="intro-section__image img-fluid"
            />
          </Col>
        </Row>
      </div>
    </div>
)

export default IntroSection
