import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { fetchData } from '../../services/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import '../../styles/App.css';

export function Articles() {
    const [articles, setArticles] = useState<any[]>([]); // State to hold multiple articles
    const [selectedArticle, setSelectedArticle] = useState<any | null>(null); // State to hold the selected article
    const [visibleCount, setVisibleCount] = useState(5); // State to control number of articles shown

    useEffect(() => {
        fetchData()
            .then((response) => {
                console.log('Fetched data:', response); // Log to inspect structure

                if (!response || !response.data || response.data.length === 0) return;

                // Set the articles state to the data array
                setArticles(response.data);
                // Set the first article as the selected one by default
                setSelectedArticle(response.data[0]);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleLoadMore = () => {
        setVisibleCount(prevCount => prevCount + 5); // Increase the count by 5
    };

    const truncateSummary = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + '...'; // Truncate and add ellipsis
        }
        return text; // Return the original text if it's shorter
    };

    if (!selectedArticle) {
        console.log("Data not yet set. Rendering loading state.");
        return <div>Loading...</div>; // Show loading state while fetching data
    }

    return (
        <Container>
            {/* Displaying the selected article in a larger format */}
            <div className="mb-4 article-container">
                <img
                    src={selectedArticle.preview_thumb ? selectedArticle.preview_thumb.split(' ')[0] : 'default-image-url.jpg'}
                    alt="Article image"
                    className="article-image"
                />
                <h3 className="mt-2">{selectedArticle.show || 'No Title Available'}</h3>
                <p>{selectedArticle.overall_summary || 'No Summary Available'}</p>
                <p className="text-muted">
                    {selectedArticle.show_date || 'Date not available'} {/* Add date if available */}
                </p>
            </div>

            {/* Displaying other articles for selection in a scrollable container */}
            <h5>Other Articles</h5>
            <div className="other-articles-container">
                <ListGroup>
                    {articles.slice(0, visibleCount).map((article, index) => (
                        <ListGroup.Item 
                            key={index} 
                            action 
                            onClick={() => setSelectedArticle(article)} 
                            className="other-article-container" // Apply CSS class for the container
                        >
                            <Row>
                                <Col md={3}>
                                    <img
                                        src={article.preview_thumb ? article.preview_thumb.split(' ')[0] : 'default-image-url.jpg'}
                                        alt="Article thumbnail"
                                        className="other-article-image" // Apply CSS class for the thumbnail
                                    />
                                </Col>
                                <Col md={9}>
                                    <h6>{article.show || 'No Title Available'}</h6>
                                    <p>{article.overall_summary ? truncateSummary(article.overall_summary, 156) : 'No Summary Available'}</p>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>

            {/* Load More Button */}
            {visibleCount < articles.length && ( // Only show if there are more articles to load
                <Button variant="primary" onClick={handleLoadMore} className="mt-3">
                    Load More
                </Button>
            )}
        </Container>
    );
}
