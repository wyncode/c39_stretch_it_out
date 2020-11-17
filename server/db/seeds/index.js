if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('../config/index');

const mongoose = require('mongoose');
const Stretch = require('../models/stretch');

const stretches = [
  {
    stretchName: 'beginnerNeck',
    length: '5 minutes',
    area: 'neck',
    level: 'beginner',
    stretchType: 'sedentary',
    targetArea: 'neck',
    video: 'https://www.youtube.com/watch?v=cxDcpvD68GQ',
    illustration:
      'https://vivitherapy.com/wp-content/uploads/2015/08/image009.jpg',
    instructions: ['do this', 'do that', 'stretch your neck']
  },
  {
    stretchName: 'beginnerBack',
    length: '5 minutes',
    area: 'back',
    level: 'beginner',
    stretchType: 'sedentary',
    targetArea: 'back',
    video: 'https://www.youtube.com/watch?v=cxDcpvD68GQ',
    illustration:
      'https://vivitherapy.com/wp-content/uploads/2015/08/image009.jpg',
    instructions: ['do this', 'do that', 'stretch your back']
  }
];
const seed = async () => {
  await Stretch.insertMany(stretches);
  const results = await Stretch.find();
  console.log(`${results.length} Stretches were seeded`);
};
seed();
