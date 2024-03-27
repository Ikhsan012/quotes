const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '0.0.0.0';
const port = 5001;

const server = http.createServer((req, res) => {
  // Mengambil alamat URL yang diminta oleh client
  const requestedUrl = req.url === '/' ? '/index.html' : req.url;

  // Mendapatkan path file yang diminta
  const filePath = path.join(__dirname, requestedUrl);

  // Membaca file yang diminta
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('File not found!');
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});