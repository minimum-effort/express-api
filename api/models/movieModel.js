var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter the name of the movie. '
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  entry_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Movies', MovieSchema);