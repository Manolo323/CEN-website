import { Container, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

export function DataHub() {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero-section">
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={8}>
                            <h1>Center For Education News Data Hub</h1>
                            <p className="lead">
                                Welcome to our Data Hub page. This will house all of our chart data and education news analysis
                            </p>
                            <Button variant="light" href="#about">Learn More</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
