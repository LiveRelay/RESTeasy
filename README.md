# RESTeasy

RESTeasy is a boilerplate for building RESTful API web services using [NodeJS](http://nodejs.org/), 
[ExpressJS 4.x](http://expressjs.com/) and [MongoDB](http://www.mongodb.org/).

RESTeasy provides an easily understandable file and folder structure following MVC practices.
It leverages a number of Node packages that are useful when developing RESTful APIs including:

* [MongooseJS](http://mongoosejs.com/) for interfacing and validating data to be stored in MongoDB
* [Mocha](http://mochajs.org/) as a test framework
* [Supertest](https://github.com/visionmedia/supertest) & [Should](https://github.com/visionmedia/should.js/) for simplifying API HTTP testing
* [Winston](https://github.com/flatiron/winston) for logging of API calls and exceptions

## Usage

### To run the boilerplate sample application, perform the following steps:

1. Install and execute the MongoDB service on the local machine. View the [MongoDB docs](http://docs.mongodb.org/manual/) for more info.
2. Create a database named "rest-easy" within MongoDB (the default database, configurable according to your needs)
3. Install NodeJS. View the [NodeJS docs](http://nodejs.org/documentation/) for more info.
4. "cd" to the directory containing this README
5. Execute "npm install" to install all necessary dependency packages
6. Execute "npm start" to run the application
7. Access your API at [http://localhost:3000/api/v1/base](http://localhost:3000/api/v1/base) (the default API path & endpoint, configurable according to your needs)

## Application Structure

The following application structure is provided by the boilerplate:

* app/ - stores RESTful web service application
  * models/ stores model code
    * base.js - a sample base model
  * controllers/ - stores controller code (routes specified in Express)
    * base.js - sample base controller (tied to API endpoint /base)
  * views/ - stores view code (if any)
* public/ - publicly accessible content (if any)
  * assets/ - application assets
    * images/ - image assets
  * css/ - public css
  * js/ - public JavaScript code
* libs/ - any external JavaScript libraries needed by the app
* test/ - application test code
* node_modules/ - created by NPM
* package.json - defines our node app and dependencies
* server.js - configures server application and creates routes

## Configuration

RESTeasy uses a configuration scheme that makes it easy to manage different environments for your web
service application. For example, the application may be deployed on a production environment utilizing
a 3rd party MongoDB service while the development environment uses a localhost MongoDB instance.

* /config
  * config.js - options that are global to all deployments of the web service application
  * /env - houses environment specific configurations
    * development.js - development environment configuration
    * staging.js - staging environment configuration
    * production.js - production environment configuration

By default, executing "npm start" to launch the application will utilize the development.js environment
configuration options. Modifying the package.json "start" script NODE_ENV value will change the
environment configuration file used.

## Sample Code

A sample Controller and Model named "base" is provided with the boilerplate. It performs Create,
Read, Update, Delete operations on the [http://localhost:3000/api/v1/base](http://localhost:3000/api/v1/base) endpoint. The base controller
and model can be used as a template to create the endpoints that meet your API needs.

## Testing

Mocha is used as a test platform to perform the API calls.
To run the test suite for the boilerplate sample application, execute: "npm test".
A POST and GET operation will be performed on the /base endpoint.
