

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const routes = require('./routes/index');

const app = express();

const port = process.env.PORT || 8086;

//const {errors} = require("celebrate");

// éstos son middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/api/v1', routes);
//app.use(errors());
//errors es ele celebrate

app.get('/', (req, res) => {
    res.send("Nice is Working :)")
})

app.listen(port, e => console.log(`works in port ${port}`));
