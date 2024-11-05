// Footer.tsx
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';

export function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={4} className="text-center text-md-left">
                        <img
                            src="/cen-logo-2.png"
                            alt="Brand Icon"
                            className="brand-icon mb-2"
                            style={{ width: '100px' }} 
                        />
                    </Col>
                    <Col md={4} className="text-center">
                        {/* Optional space for additional content */}
                    </Col>
                    <Col md={4} className="text-center text-md-right">
                        <div className="d-flex flex-column align-items-end">
                            <h5 className="mb-2">Subscribe to our Newsletter</h5>
                            <Form className="d-flex">
                                <Form.Group controlId="newsletterEmail" className="mb-0">
                                    <Form.Control
                                        type="email"
                                        className="mr-2"
                                        placeholder="Enter your email"
                                    />
                                </Form.Group>
                                <Button variant="outline-light" type="submit">
                                    Subscribe
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
