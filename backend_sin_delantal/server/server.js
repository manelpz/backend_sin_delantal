/*const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

const port = process.env.PORT || 9060;

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'this shit is working :)',
}));

app.listen(port, e => console.log(`works in port ${port}`));

module.exports = app;*/


const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

//const routes = require('./routes');

const app = express();

const port = process.env.PORT || 8080;

//const {errors} = require("celebrate");

// éstos son middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use('/api/v1', routes);
//app.use(errors());
//errors es ele celebrate

app.get('/', (req, res) => {
    res.send("Everything Works :)")
})

app.listen(port, e => console.log(`works in port ${port}`));
