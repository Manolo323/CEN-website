import { Container } from "react-bootstrap";
import '../styles/App.css';
import { Articles } from "../components/articleGallery/DisplayArticleContent";

export function Home() {
  return (
    <div>
      {/* Image Section */}
      <div className="hero-image">
        <img
          src="/cen-brand-guidelines-1.png" // Adjust the path as needed
          alt="Hero"
          className="d-block w-100 hero-image" // Use the same class for styling
        />
      </div>

      {/* Articles Section */}
      <Container className="mt-4">
        <h2>Education News This Week</h2>
        <Articles /> {/* This will render your card with the article data */}
      </Container>
    </div>
  );
}

