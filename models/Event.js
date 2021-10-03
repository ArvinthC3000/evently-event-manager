const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'events',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  isImportant: {
    type: Boolean,
    default: false,
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
  markedImportant: {
    type: Array,
    default: [],
  },
  modifiedDate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('contact', EventSchema);
