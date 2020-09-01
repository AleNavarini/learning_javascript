'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio')
        .then(()=>{
            console.log("Connection succesful");

            // create server
            app.listen(port, () => {
                console.log("Server running...");
            })

        })
        .catch((err) => console.log(err));