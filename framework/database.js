const dyimp = require('dyimp');
const mysql = require('mysql2');
const config = dyimp('config');

const connection = mysql.createConnection(config.database);

module.exports = connection;