const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  attendees: { type: Number },
  topics: [String],
  status: { type: String, enum: ['upcoming', 'past'], required: true },
  registrationLink: { type: String },
  images: [String]
});

module.exports = mongoose.model('Event', eventSchema, 'events');