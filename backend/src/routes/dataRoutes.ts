import express from 'express';
import { supabase } from '../config/dbConfig';
import { fetchData } from '../controllers/dataController';

const router = express.Router();

// Route to fetch filtered data
// router.get('/data/', async (req, res) => {
//     try {
//         const data = await fetchData(); // Ensure fetchData is imported or defined
//         res.json(data);
//     } catch (error) {
//         if (error instanceof Error) {
//             res.status(500).json({ message: error.message });
//         } else {
//             res.status(500).json({ message: 'An unknown error occurred' });
//         }
//     }
// });

// Route to test the database connection
router.get('/test-connection', async (req, res) => {
  try {
      console.log('Attempting to connect to the database...');
      
      const { data, error } = await supabase
          .from('your_table_name') // Replace with a valid table name
          .select('*')
          .limit(1); // Fetch a single row for testing
      
      if (error) {
          console.error(`Database connection failed: ${error.message}`);
          throw new Error(`Database connection failed: ${error.message}`);
      }
      
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
