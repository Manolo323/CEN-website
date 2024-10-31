import express from 'express';
import cors from 'cors';
import router from '../routes/dataRoutes';

class App {
    private app: express.Application;
    private PORT: number;

    constructor() {
        this.app = express();
        this.PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
        this.initializeMiddleware();
        this.initializeRoutes();
    }

    private initializeMiddleware() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(this.logRequests); // Example of using a private method for logging
    }

    private logRequests(req: express.Request, res: express.Response, next: express.NextFunction) {
        console.log(`Received request: ${req.method} ${req.url}`);
        next();
    }

    private initializeRoutes() {
        this.app.use('/api', router); // Mount your routes here

        // Optional: catch-all route for 404
        this.app.use((req, res) => {
            res.status(404).json({ message: 'Route not found' });
        });
    }

    public start() {
        this.app.listen(this.PORT, () => {
            console.log(`Server is running on port ${this.PORT}`);
        });
    }
}

// Entry point
const server = new App();
server.start();
