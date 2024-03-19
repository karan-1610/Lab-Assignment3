// Import required modules
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000; // Define the port number

// Define route to display raw JSON contents
app.get('/cars', (req, res) => {
    // Read JSON file
    fs.readFile('./data/data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        // Send raw JSON data as response
        res.send(data);
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
