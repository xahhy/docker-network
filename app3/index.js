const http = require('http');

http
  .createServer(function handler(req, res) {
    res.write('app3 working');
    res.end();
  })
  .listen(83, () => console.log('app3 start listen on http://localhost:83'));
