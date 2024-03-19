// Import required modules
const express = require('express');
const app = express();
const PORT = 3000; // Define the port number

// Define route to display group names using HTML elements
app.get('/', (req, res) => {
    // Array of group names
    const groupNames = ['Karan Panchal', 'Aryan Verma', 'Pooja Pooja'];

    // Construct HTML to display group names
    let htmlResponse = '<h1>Group Members</h1><ul>';
    groupNames.forEach(group => {
        htmlResponse += `<li>${group}</li>`;
    });
    htmlResponse += '</ul>';

    // Send HTML response
    res.send(htmlResponse);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
