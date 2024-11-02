import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchData } from '../../services/api'; // Adjust the path as needed

export function Articles() {
    const [cardData, setCardData] = useState<{
        title: string;
        text: string;
        items: string[];
        imageSrc: string;
    } | null>(null); // Start with null

    useEffect(() => {
        fetchData()
            .then((data) => {
                console.log('Fetched data:', data); // Log the data to inspect it

                // Use optional chaining and provide a default value for preview_thumb
                const thumbnailUrl = data.preview_thumb ? data.preview_thumb.split(' ')[0] : 'default-image-url.jpg';

                setCardData({
                    title: data.show || 'No Title Available', // Provide default values if fields are missing
                    text: data.overall_summary || 'No Summary Available',
                    items: [data.station || 'Unknown Station'],
                    imageSrc: thumbnailUrl
                });
            })
            .catch(error => console.error('Error setting card data:', error));
    }, []);

    if (!cardData) {
        return <div>Loading...</div>; // Show loading state while fetching data
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={cardData.imageSrc} alt="Card image cap" />
            <Card.Body>
                <Card.Title>{cardData.title}</Card.Title>
                <Card.Text>{cardData.text}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                {cardData.items.map((item, index) => (
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
