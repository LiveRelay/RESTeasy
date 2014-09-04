/**
 *
 * A sample Mocha test script for the API base path
 *
 **/

var should = require('should');
var request = require('supertest');
var config = require('../config/config');

// Use the port & path defined according to the config file
var url = 'http://localhost:' + config.port + config.basePath + '/' + config.version + '/base';

// This test simply verifies the API URL base path is working
describe('The API URL base path: ' + url, function () {

  // Nothing to really do in the before clause
  before(function (done) {
    done();
  });

  it('POST with some sample data should return a 201 code', function (done) {
    var sampleData = {
      "sampleString" : "Hello"
    };

    request(url)
      .post('')
      .send(sampleData)
      .expect(201, done);
  });

  // We expect it to return 200 on a GET
  it('GET should return a 200 code', function (done) {
    request(url)
      .get('')
      .expect(200, done);
  });
});
