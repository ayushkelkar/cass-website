const Team = require('../models/Team');

const getTeam = async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getTeam };