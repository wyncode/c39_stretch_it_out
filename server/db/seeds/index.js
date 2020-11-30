if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('../config/index');

const { stretches } = require('./data');

const Stretch = require('../models/stretch');

const seed = async () => {
  await Stretch.deleteMany();
  await Stretch.insertMany(stretches);
  const results = await Stretch.find();
  console.log(`${results.length} Stretches were seeded`);
};
seed();
