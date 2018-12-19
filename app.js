const dyimp = require('dyimp');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = dyimp('app/routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(routes);

module.exports = app;