const path = require('path');
const express = require('express');

const app = express();
app.use(express.json());

// route handler for requests to /data
app.post('/hook', (req, res, next) => {
  const webhookUrl = req.params.url;

  console.log(req);

  console.log('req data:::', req.data);
  console.log('webhookUrl:::', webhookUrl);

  res.status(200).send('OK')
});

module.exports = app;
