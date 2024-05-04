require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const createMockData = require('./mock'); // Import the createMockData function from mock.js
const movieRoutes = require('./routes/movies'); // Import the movie routes
const cors = require('cors');

const app = express();

async function startServer() {
    try {
        // Determine the current environment
        const isProduction = process.env.PRODUCTION_MODE === 'yes';
        const connectionUri = isProduction ? process.env.PROD_MONGO_URI : process.env.TEST_MONGO_URI;

        // If in development mode, create mock data
        if (isProduction) {
            console.log('Starting in production mode');
        } else {
            console.log('Starting in development mode...');

            if (process.env.RESET_TEST_DB === 'yes') {
                await createMockData()
                console.log('Mock data creation complete')
            }
        }

        // Connect to the database
        await mongoose.connect(connectionUri);
        console.log('Connected to the database');

        // Middleware
        app.use(cors());
        app.use(express.json()); // Parse JSON requests

        // Print requests for debugging
        app.use((req, res, next) => {
            console.log(`${req.method} ${req.path}`);
            next();
        });

        // API routes
        app.use('/api/movies', movieRoutes);

        // Start listening for requests
        const port = process.env.PORT || 4000; // Default to port 3001 if PORT is not set
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (err) {
        console.error('An error occurred:', err);
    }
}

// Start the server
startServer();

// Event handler for server shutdown
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close(); // Close the database connection
        console.log('Database connection closed');
    } catch (err) {
        console.error('Error closing database connection:', err);
    } finally {
        process.exit(); // Exit the process
    }
});