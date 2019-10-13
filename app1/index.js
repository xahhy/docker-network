const http = require('http');

http
  .createServer(function handler(req, res) {
    res.write('app1 working');
    res.end();
  })
  .listen(81, () => console.log('app1 start listen on http://localhost:81'));
