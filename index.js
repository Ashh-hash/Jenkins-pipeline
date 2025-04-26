// index.js
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js app inside Docker!');
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
