const express = require("express");
const app = express();
const bodyParser = require('body-parser');

//console.log(process.env);

app.use(bodyParser.json());

require('../routes')(app);

module.exports = app;