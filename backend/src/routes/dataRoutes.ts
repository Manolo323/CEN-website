import express from 'express';
import { fetchData } from '../controllers/dataController';  // Import the fetchData function

const router = express.Router();

// Route to test the database connection
router.get('/test-connection', async (req, res) => {
  try {
      console.log('Attempting to connect to the database...');
      
      const data = await fetchData();  // Use fetchData from dataController

      console.log('Database connection successful:', data);
      res.status(200).json({ message: 'Connection successful', data });
  } catch (error) {
      if (error instanceof Error) {
          console.error('Error occurred:', error.message);
          res.status(500).json({ message: error.message });
      } else {
          console.error('An unknown error occurred');
          res.status(500).json({ message: 'An unknown error occurred' });
      }
  }
});

export default router;
