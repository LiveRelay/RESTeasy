/**
 *
 * The main HTTP server & start point for the NodeJS application
 *
 **/

// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var winston = require('winston');
var config = require('./config/config');

// Start Winston to log API events and exceptions
if (typeof config.logger !== 'undefined' && typeof config.logger.api !== 'undefined') {
  console.log('Logging API events to: ' + config.logger.api);
  winston.add(winston.transports.File, {
    filename: config.logger.api
  });
}
if (typeof config.logger !== 'undefined' && typeof config.logger.exceptions !== 'undefined') {
  console.log('Logging Exceptions to: ' + config.logger.exceptions);
  winston.handleExceptions(new winston.transports.File({
    filename: config.logger.exceptions
  }));
}

// Enable debug logging if the configuration calls for it
if (typeof config.db.debug !== 'undefined' && config.db.debug == true) {
  mongoose.set('debug', true);
}

// Connect to the MongoDB for this environment
var dbConnect = function () {
  mongoose.connect(config.db.host, config.db.options);
};
dbConnect();

// Log MongoDB connection errors, and attempt to reconnect
mongoose.connection.on('error', function (err) {
  winston.log('error', 'Database connection error: ' + err);
});
mongoose.connection.on('disconnected', dbConnect);

// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Serve public directory as static files
app.use(express.static(__dirname + '/app/public'));

// Register all controllers as routes with <basePath>/<version> as a prefix
var apiPath = config.basePath + '/' + config.version;
app.use(apiPath, require('./app/controllers/base'));

// Start the server
app.listen(config.port);
winston.log('info', 'Server running on port: ' + config.port);

