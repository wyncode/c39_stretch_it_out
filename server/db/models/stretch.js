const mongoose = require('mongoose');

const stretchSchema = new mongoose.Schema(
  {
    stretchName: {
      type: String,
      required: true
    },
    length: {
      type: String
    },
    area: {
      type: String
    },
    level: {
      type: String
    },
    stretchType: {
      type: String
    },
    targetArea: {
      type: String
    },
    video: {
      type: String
    },
    illustration: {
      type: String
    },
    instructions: [
      {
        type: String
      }
    ]
  },
  {
    timestamps: true
  }
);

const Stretch = mongoose.model('Stretch', stretchSchema);
module.exports = Stretch;
