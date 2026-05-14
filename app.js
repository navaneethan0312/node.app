const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/health') {
    res.writeHead(200);
    res.end('OK');
    return;
  }

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Node App Running</h1>');
});

server.listen(process.env.PORT || 3000);
module.exports = server;
