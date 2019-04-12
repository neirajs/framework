const dyimp = require('dyimp');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const app = express();
const routes = dyimp('app/routes');

// set view engine
app.set('views', path.resolve(__dirname, 'app/views'));
app.engine('.hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(routes);

module.exports = app;