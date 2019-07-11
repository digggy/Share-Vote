const mongoose = require('mongoose');

//Setting the debug mode true
mongoose.set('debug', true);
mongoose.Promise = global.Promise;
console.log("Running......");

//Connecting to the database
mongoose.connect('mongodb://localhost:27017/db');

module.exports.User = require('./user');
module.exports.Poll = require('./poll');