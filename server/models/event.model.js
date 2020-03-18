const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  start: {
    type: String,
    required: true,
    unique: true
  },
  end: {
    type: String,
    required: true
  }
}, {
  versionKey: false
});


module.exports = mongoose.model('Event', EventSchema);
