const server = require('./server');
const port = process.env.PORT || 3000;

server.listen(port, function() {
  console.log('Server is listening on http://localhost:3000');
});
