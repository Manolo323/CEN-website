import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

interface ArticleContentProps {
    title: string;
    text: string;
    items: string[];
    imageSrc: string;
}

export function Articles({ title, text, items, imageSrc }: ArticleContentProps) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageSrc} alt="Card image cap" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {items.map((item, index) => (
                    <ListGroup.Item key={index}>{item}</ListGroup.Item>
                ))}
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}
