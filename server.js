const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/hook', (req, res, next) => {

  // Get data from new mailchimp subscriber and create the discoutn code string
  const firstName = req.body.data.merges.FNAME;
  const lastName = req.body.data.merges.FNAME;
  const dicsountCode = `RAD_REP_${firstName.trim().replace(/\s/g, '')}_${lastName.trim().replace(/\s/g, '')}`;

  // price rule id can be changed to offer different discount
  const priceRuleId = '350241489007';

  // post the new discount code to shopify
  axios.post(
    `https://surfpatch.myshopify.com/admin/price_rules/${priceRuleId}/discount_codes.json`,
    {
      discount_code: {
        code: dicsountCode
      }
    },
    {
      auth: {
        username: process.env.SHOPIFY_API_KEY || 'efcc1f9f2e74becd1ff3eebcac6d09aa',
        password: process.env.SHOPIFY_SECRET || 'c4fe14341677c580282dd5e39e0e6480'
    }
   }).then(res => console.log(res));

  res.status(200).send(`Code created: ${dicsountCode}`);
});

app.get('/hook', (req, res, next) => {
  res.status(200).send("Server's up, dude!");
});

app.get('/', (req, res, next) => {
  res.status(200).send("Server's up, dude!");
});

module.exports = app;
