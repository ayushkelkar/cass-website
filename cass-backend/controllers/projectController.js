const Project = require('../models/Project');

const getProjects = async (req, res) => {
  try {
    const filter = req.query.status ? { status: req.query.status } : {};
    const projects = await Project.find(filter);
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProjects };