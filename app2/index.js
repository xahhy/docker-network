const http = require('http');

http
  .createServer(function handler(req, res) {
    res.write('app2 working');
    res.end();
  })
  .listen(82, () => console.log('app2 start listen on http://localhost:82'));
