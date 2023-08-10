const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our HOME PAGE!');
  }
  if (req.url === '/about') {
    res.end('Welcome to our ABOUT PAGE!');
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for.</p>
  <a href="/">Back Home</a>
  `);
});

server.listen(5000, () => console.log('Server running on port 5000'));
