import express from 'express';
import cors from 'cors'; // Import the CORS package
import router from '../routes/dataRoutes';
const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON requests (if needed)
app.use(express.json());

// Example route for the root
app.get('/', (req, res) => {
  res.send('Hello world, this is my backend');
});

// Use your data routes for handling data-related requests
app.use('/api', router); // Prefix all data routes with /api

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
