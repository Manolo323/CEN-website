import express from 'express';
import cors from 'cors'; // Import the CORS package

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests (if needed)
app.use(express.json());

// Example route for the root
app.get('/', (req, res) => {
  res.send('Hello world, This is my backend');
});

// Example GET request
app.get('/hi', (req, res) => {
  res.send('This is my GET request in my backend');
});

// Additional routes can be defined here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
