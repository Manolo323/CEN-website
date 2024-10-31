// services/api.ts
import axios from 'axios';

export async function fetchData() {
    try {
        const response = await axios.get('http://localhost:3000/api/test-connection'); // Update with your correct route
        return response.data; // Adjust this if the data is nested
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
