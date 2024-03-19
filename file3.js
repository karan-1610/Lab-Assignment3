// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000; // Define the port number

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dummy data for demonstration (replace this with your actual data or database)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// CRUD operations

// CREATE - Add a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

// READ - Get all users
app.get('/users', (req, res) => {
    res.json(users);
});

// UPDATE - Update a user
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    users = users.map(user => (user.id === userId ? updatedUser : user));
    res.json(updatedUser);
});

// DELETE - Delete a user
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.status(204).send();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
