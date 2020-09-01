'use strict'
// Imports
var mongoose = require('mongoose');

var schema = mongoose.Schema;

// Create schema for my model
var ProjectSchema = schema({
    name: String,
    description: String,
    repository: String,
    tech: String

});

// Export model
module.exports = mongoose.model('Project' , ProjectSchema);