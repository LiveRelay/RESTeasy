/**
 *
 * A Sample Model
 *
 **/

var mongoose = require('mongoose');

var BaseSchema = new mongoose.Schema({
  sampleString: {
    type: String
  }
});

// Disable strict mode if you want to be flexible about data insertion, otherwise enable it
// See Mongoose documentation: http://mongoosejs.com/docs/guide.html#strict
BaseSchema.set('strict', false);

// Disable auto indexing for production environment
if (process.env.NODE_ENV == 'production') {
  BaseSchema.set('autoIndex', false);
}

// Export the Mongoose model
module.exports = mongoose.model('Base', BaseSchema);
