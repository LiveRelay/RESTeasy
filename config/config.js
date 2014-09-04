/**
 *
 * Defines global configuration options and automatically loads the proper
 * environment specific configuration options
 *
 **/

// Load required packages
var path = require('path');
var extend = require('util')._extend;
var development = require('./env/development');
var staging = require('./env/staging');
var production = require('./env/production');

// Default config options (applied globally to all environments)
var defaults = {
  root: path.normalize(__dirname + '/..'),
  port: 3000,
  basePath: '/api',
  version: 'v1'
};

/**
 * Expose
 */

module.exports = {
  development: extend(development, defaults),
  staging: extend(staging, defaults),
  production: extend(production, defaults)
}[process.env.NODE_ENV || 'development'];
