const http = require('http');

const server = http.createServer((req, res) => {

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Node App Deployed Successfully</h1>');
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = server;
