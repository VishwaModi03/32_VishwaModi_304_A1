const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(`Request URL: ${req.url}, Method: ${req.method}`);

    if (req.url === '/' || req.url === '/index.html') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading HTML file');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.url === '/gethello' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello NodeJS!!');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
