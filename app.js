const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Node App Deployed Successfully</h1>');
});

// Only start listening when not in test mode
if (require.main === module) {
  server.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

module.exports = server;
