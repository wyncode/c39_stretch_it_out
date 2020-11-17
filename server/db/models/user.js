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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Stretch'
      }
    ]
  },
  {
    timestamps: true
  }
);

//DELETE METHOD to delete password and tokens from new user instance when it is passed back to the user.
userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};
//hashing password before saving user
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 16);
  next();
});

//making token for user
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
      name: `${user.firstName} ${user.lastName}`
    },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  // user.tokens = user.tokens.push({ token });
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//locating a user by email and password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid email or password');
  const matched = await bcrypt.compare(password, user.password);
  if (!matched) throw new Error('Invalid email or password');
  return user;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
