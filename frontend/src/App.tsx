import { useEffect, useState } from 'react';
import { Articles } from './components/articleGallery/DisplayArticleContent'; // Ensure this path is correct
import { fetchData } from './services/api';

interface ArticleContentProps {
    title: string;
    text: string;
    items: string[];
    imageSrc: string;
}

export function App() {
    const [cardData, setCardData] = useState<ArticleContentProps | null>(null);

    useEffect(() => {
        fetchData()
            .then((data) => {
                // Map the JSON response to your component's props
                setCardData({
                    title: data.show, // or another field from the JSON data
                    text: data.overall_summary,
                    items: [data.station, data.index.toString()], // Example fields; add others as needed
                    imageSrc: data.preview_thumb // or any valid image URL
                });
            })
            .catch((error) => console.error('Error setting card data:', error));
    }, []);

    return (
        <div>
            <h1>My App</h1>
            {cardData ? ( // Only render Articles if cardData is not null
                <Articles
                    title={cardData.title}
                    text={cardData.text}
                    items={cardData.items}
                    imageSrc={cardData.imageSrc}
                />
            ) : (
                <p>Loading...</p> // Optionally, you can show a loading message
            )}
        </div>
    );
}

export default App;
