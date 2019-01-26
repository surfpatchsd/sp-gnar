const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));


// route handler for requests to /data
app.post('/hook', (req, res, next) => {

  console.log('stringified merges:::', JSON.stringify(req.body.data.merges));
  console.log('not stringified merges:::', req.body.data.merges);

  res.status(200).send('OK')
});

// route handler for requests to /data
app.get('/hook', (req, res, next) => {
  res.status(200).send("Server's up, dude!");
});

module.exports = app;
