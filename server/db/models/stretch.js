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
    timeOfDay: {
      type: Date
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
    ],
    premium: {
      type: Boolean
    }
  },
  {
    timestamps: true
  }
);

const Stretch = mongoose.model('Stretch', stretchSchema);
module.exports = Stretch;
