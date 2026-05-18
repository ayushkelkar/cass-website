const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const eventRoutes = require('./routes/events');
const projectRoutes = require('./routes/projects');
const teamRoutes = require('./routes/team');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api/events', eventRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/team', teamRoutes);

app.get('/', (req, res) => {
  res.send('CASS API is running');
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});