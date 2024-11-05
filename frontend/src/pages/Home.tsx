import { Carousel, Container } from "react-bootstrap";
import '../styles/App.css';
import { Articles } from "../components/articleGallery/DisplayArticleContent";
import { NavigationBar } from "../components/navbar-functions/NavBar";
import { Footer } from "../components/footer/Footer";

export function Home() {
  return (
    <div>
        <NavigationBar />
        <Carousel>
      {/* <Carousel.Item>
        <img
          src="/cen-brand-guidelines.png" // Adjust the path as needed
          alt="First slide"
          className="d-block w-100 carousel-image"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          src="/cen-brand-guidelines-1.png" // Adjust the path as needed
          alt="Second slide"
          className="d-block w-100 carousel-image"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    {/* Articles Section */}
    <Container className="mt-4">
        <h2>Latest Articles</h2>
        <Articles /> {/* This will render your card with the article data */}
      </Container>
    <Footer />
    </div>
  );
}

