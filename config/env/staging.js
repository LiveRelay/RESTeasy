/**
 *
 * Defines configuration options for staging environment deployments
 *
 **/

module.exports = {
  logger: {
    api: "logs/api.log",
    exceptions: "logs/exceptions.log"
  },
  db: {
    host: 'mongodb://localhost/rest-easy',
    options: { server: { socketOptions: { keepAlive: 1 } } }
  }
};
