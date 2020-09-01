'use strict'
// Imports
var mongoose = require('mongoose');

var schema = mongoose.Schema;

// Create schema for my model
var ProjectSchema = schema({
    name: string,
    description: string,
    repository: string,
    tech: [string]

});

// Export model
module.exports = mongoose.model('Project' , ProjectSchema);