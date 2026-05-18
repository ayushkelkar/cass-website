const Event = require('../models/Event');

const getEvents = async (req, res) => {
  try {
    const filter = req.query.status ? { status: req.query.status } : {};
    const events = await Event.find(filter);
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getEvents };