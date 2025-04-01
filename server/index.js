/* eslint-disable no-undef */
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 6969;

// Middleware
app.use(cors({
  origin: '*',
}));

app.use(express.json());

// API Route
app.get('/api', (req, res) => {
  res.send('Hello from Express API!');
});

// API example
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express & React Vite!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});