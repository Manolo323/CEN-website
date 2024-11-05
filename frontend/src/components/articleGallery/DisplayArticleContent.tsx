import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchData } from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Articles() {
    const [cardData, setCardData] = useState<{
        title: string;
        text: string;
        items: string[];
        imageSrc: string;
    } | null>(null);

    useEffect(() => {
        fetchData()
            .then((response) => {
                console.log('Fetched data:', response); // Log to inspect structure

                if (!response || !response.data || response.data.length === 0) return;

                // Extract the first item from the `data` array inside the response object
                const rowData = response.data[0];
                
                const thumbnailUrl = rowData.preview_thumb ? rowData.preview_thumb.split(' ')[0] : 'default-image-url.jpg';

                setCardData({
                    title: rowData.show || 'No Title Available',
                    text: rowData.overall_summary || 'No Summary Available',
                    items: [rowData.station || 'Unknown Station'],
                    imageSrc: thumbnailUrl
                });
            })
            .catch(error => console.error('Error setting card data:', error));
    }, []);

    if (!cardData) {
        console.log("Data not yet set. Rendering loading state.");
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
