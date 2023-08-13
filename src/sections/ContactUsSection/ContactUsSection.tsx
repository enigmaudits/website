import { Row, Col, Container } from 'react-bootstrap';

import ContactForm from '../../forms/ContactForm';

import Section from '../../components/Section';

const ContactUsSection = () => (
    <Section id="contact-us" className="contact-us-section">
        <Container>
        <Row className="justify-content-between">
            <Col xs={12} md={6}>
                <h2 className="contact-us-section">Contact us</h2>
                <ContactForm />
            </Col>
            <Col xs={12} md={5}>
                <img src="/images/minder2.jpeg" className="img-fluid" />
            </Col>
        </Row>
        </Container>
    </Section>
)

export default ContactUsSection;