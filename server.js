const http = require('http');
const url = require('url');
const server = http.createServer();

let messages = [
  { 'id': 1, 'user': 'Hugh Hartigan', 'message': 'Beep-boop-beep-potato' },
  { 'id': 2, 'user': 'Juliana Fargnoli', 'message': 'Cheese and wine and cheese and wine and...' },
  { 'id': 3, 'user': 'Torin \'Bear\' Hartigan', 'message': 'Ball, ball, sleep, eat, ball, play, sleep, ball, sleep' },
  { 'id': 4, 'user': 'Juniper \'Juni\' Fargnoli', 'message': 'Squirrel? AHHHHHH!! RAAA-BRRAAAA!!!' }
]

server.listen(3000, () => {
  console.log('The HTTP server is listening at Port 3000.');
})

server.on('request', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write('Hello World\n');
  response.end();
});