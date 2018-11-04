const dyimp = require('dyimp');
const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const config = dotenv.config();
const routes = dyimp('app/routes');

// throw an error if no envfile
if (config.error) {
  throw config.error;
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(routes);

module.exports = app;