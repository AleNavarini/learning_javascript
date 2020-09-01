'use strict'

var express = require('express');

var bodyParser = require('body-parser');

var app = express();


// routes files

// middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//CORS

// routes
//Home screen
app.get('/', (req, res) => {
    res.status(200).send();
})

app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Perfect response from GET"
    });
})
app.post('/test', (req, res) => {

    console.log(req.body.name);
    res.status(200).send({
        message: "Perfect response from POST"
    });
})
// export
module.exports = app;
