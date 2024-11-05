// App.tsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"; // Import your Home component
import { AboutUs } from "./pages/AboutUs"; // Import your AboutUs component (make sure to create this file)
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Layout } from "./layouts/Layout";
import { DataHub } from "./pages/DataHub";

export function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/data-hub" element={<DataHub />} />
                    {/* You can add more routes here as needed */}
                </Routes>
            </Layout>
        </Router>
    );
}
