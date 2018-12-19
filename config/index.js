const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const file = fs.readFileSync(path.join(__dirname, '../config.yaml'), 'utf8');

const config = YAML.parse(file);
module.exports = config;