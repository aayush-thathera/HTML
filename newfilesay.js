// const fs = require("fs");
// const filedata = fs.readdirSync('input.txt');
// console.log(filedata.toString());
// console.log("End of program execution");

const http = require('http'); // Create an HTTP server

// Create the server
const server = http.createServer((req, res) => {
    console.log(`Received ${req.method} request on ${req.url}`);
    
    if (req.method === 'GET') { // Handle GET requests
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'This is a GET request' }));
    } else if (req.method === 'POST') { // Handle POST requests
        let body = ''; // Initialize an empty string to collect the POST data

        // Collect incoming data chunks
        req.on('data', chunk => {
            body += chunk; // Append the chunk to the body
        });

        // Once the data is fully received
        req.on('end', () => {
            console.log('Received POST data:', body);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ message: 'Received POST data', data: body }));
        });
    } else { // Handle other request methods
        res.statusCode = 405; // HTTP status code 405: Method Not Allowed
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
});

// Start the server on port 8000
server.listen(8000, 'localhost', () => {
    console.log('Server is running at http://127.0.0.1:8000/');
});
