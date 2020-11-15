const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
      trim: true
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ],
    personType: {
      type: String,
      required: true
    },
    stretchingLevel: {
      type: String,
      required: true
    },
    timeDedicated: {
      type: String,
      required: true
    },

    avatar: {
      type: String
    },
    stretches: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Stretch'
      }
    ]
  },
  {
    timestamps: true
  }
);
const User = mongoose.model('User', userSchema);
module.exports = User;
