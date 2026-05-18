const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  image: { type: String },
  links: {
    linkedin: { type: String },
    email: { type: String },
    website: { type: String }
  }
});

module.exports = mongoose.model('Team', teamSchema, 'team');