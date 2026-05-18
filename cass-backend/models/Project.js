const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['ongoing', 'finished'], required: true },
  thumbnail: { type: String },
  tags: [String],
  links: {
    github: { type: String },
    demo: { type: String }
  }
});

module.exports = mongoose.model('Project', projectSchema, 'projects');