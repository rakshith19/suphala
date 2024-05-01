const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS middleware
app.use(cors());

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'suphala'
});

// Middleware to parse JSON bodies
app.use(express.json());

// Check if database is connected
app.get('/api/checkDatabaseConnection', async (req, res) => {
    try {
        // Query a simple statement to check database connection
        const [rows, fields] = await connection.execute('SELECT 1');
        res.status(200).json({ message: 'Database connected successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Database connection error' });
    }
});

// Endpoint to receive form data from the frontend
app.post('/api/addData', async (req, res) => {
    // Your existing code here
});

// Endpoint to receive bulk data and store it in the database
app.post('/api/addDataBulk', async (req, res) => {
    // Your existing code here
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
