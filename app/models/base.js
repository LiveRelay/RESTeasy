/**
 *
 * A Sample Model
 *
 **/

var mongoose = require('mongoose');
var hooker = require('hooker');

var BaseSchema = new mongoose.Schema({
  sampleString: {
    type: String
  }
});

BaseSchema.pre('save', function (next) {
  // Insert any logic you want before saving to occur here
  console.log('BaseSchema pre save');
  next();
});

// Disable strict mode if you want to be flexible about data insertion, otherwise enable it
// See Mongoose documentation: http://mongoosejs.com/docs/guide.html#strict
BaseSchema.set('strict', false);

// Disable auto indexing for production environment
if (process.env.NODE_ENV == 'production') {
  BaseSchema.set('autoIndex', false);
}

var BaseModel = mongoose.model('Base', BaseSchema);

// Utilize hooks for update operations. We do it in this way because MongooseJS
// does not natively support update hooks at the Schema level. This is a way
// to support it.
hooker.hook (BaseModel, 'update', {
  pre: function () {
    // Insert any logic you want before updating to occur here
    console.log('BaseModel pre update');
  },
  post: function () {
    // Insert any logic you want after updating to occur here
    console.log('BaseModel post update');
  }
});

// Export the Mongoose model
module.exports = BaseModel;
