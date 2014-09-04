/**
 *
 * Defines configuration options for production environment deployments
 *
 **/

module.exports = {
  db: {
    host: 'mongodb://localhost/rest-easy',
    options: { server: { socketOptions: { keepAlive: 1 } } }
  }
};
