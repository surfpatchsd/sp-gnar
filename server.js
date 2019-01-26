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
  const webhookUrl = req.params.url;

  console.log(req);

  console.log('req data:::', req.data);
  console.log('webhookUrl:::', webhookUrl);

  res.status(200).send('OK')
});

// route handler for requests to /data
app.get('/hook', (req, res, next) => {
  res.status(200).send('OK')
});

module.exports = app;
