// AboutUs.tsx
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function AboutUs() {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-4">About Us</h1>
            
            <Row className="mb-5">
                <Col md={12}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>What We Are About</Card.Title>
                            <Card.Text>
                            The Center for Education News is the only think tank and education newsroom powered by educators and students. We're dedicated to bringing you in-depth K-12 education news trends, insights, and stories from those who know it best.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={12}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Our Mission</Card.Title>
                            <Card.Text>
                            Through data, research, and media we strive to create a more complex and comprehensive story about public education.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mb-5">
                <Col md={12}>
                    <Card className="text-center">
                        <Card.Body>
                            <Card.Title>Meet Our Team</Card.Title>
                            <Card.Text>
                                Our team is composed of talented and passionate individuals who are experts in 
                                their respective fields. We believe that collaboration and creativity are the keys 
                                to our success.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
