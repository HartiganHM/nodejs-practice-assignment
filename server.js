const http = require('http');
const url = require('url');
const server = http.createServer();

server.listen(3000, () => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello Wolrd\n');
  response.end();
});