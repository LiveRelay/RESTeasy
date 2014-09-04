/**
 *
 * A sample Base controller
 *
 **/

// Load required packages
var express = require('express');
var router = express.Router();
var winston = require('winston');
var Base = require('../models/base');

// The HTTP routing path for this controller. In this sample case, it is the base path.
// See Express documentation for further details: http://expressjs.com/api#router.route
var controllerRoute = '/base';

// A sample Basic router at the base endpoint performing various REST API operations on the Base model
router.route(controllerRoute)
  .all(function (req, res, next) {
    // Log the request
    winston.log('info', 'Received ' + req.method + ' request at ' + controllerRoute);
    next();
  })
  .get(function (req, res) {
    // Perform a query using the supplied "where", "sort", "limit", "skip" parameters
    var where, sort, limit, skip;
    try { where = JSON.parse(req.query.where); } catch (e) { where = ''};
    try { sort = JSON.parse(req.query.sort); } catch (e) { sort = ''};
    try { limit = JSON.parse(req.query.limit); } catch (e) { limit = ''};
    try { skip = JSON.parse(req.query.skip); } catch (e) { skip = ''};
    Base.find(where).sort(sort).limit(limit).skip(skip).exec(function (err, results) {
      if (err) return res.status(400).end();

      if (!results) return res.status(404).end();

      res.status(200);
      res.json(results);
    });
  })
  .post(function (req, res) {
    var base = new Base(req.body);
    base.save(function (err, results, numberAffected) {
      if (err) return res.status(400).end();

      res.status(201);
      res.json(results);
    });
  });

// A sample Basic router at the base endpoint /:id performing ID specific operations
router.route(controllerRoute + '/:id')
  .all(function (req, res, next) {
    // Log the request
    winston.log('info', 'Received ' + req.method + ' request at ' + controllerRoute + '/' + req.params.id);
    next();
  })
  .get(function (req, res) {
    // Perform a query for the item specified by the id parameter
    Base.findById(req.params.id).exec(function (err, results) {
      if (err) return res.status(404).end();

      if (!results) return res.status(404).end();

      res.status(200);
      res.json(results);
    });
  })
  .put(function (req, res) {
    Base.findByIdAndUpdate(req.params.id, { $set: req.body }).exec(function (err, results) {
      if (err) return res.status(404).end();

      if (!results) return res.status(404).end();

      res.status(200);
      res.json(results);
    });
  })
  .delete(function (req, res) {
    Base.findByIdAndRemove(req.params.id).exec(function (err, results) {
      if (err) return res.status(400).end();

      if (!results) return res.status(404).end();

      res.status(200);
      res.json(results);
    });
  });

module.exports = router;
