import { Footer } from '../components/footer/Footer';
import { NavigationBar } from '../components/navbar-functions/NavBar';
import '../styles/App.css'; // Import your CSS file

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout"> {/* Apply the layout class here */}
            <NavigationBar />

            <main>{children}</main> {/* This will render the page-specific content */}

            <Footer /> {/* Always render the footer */}
        </div>
    );
};
