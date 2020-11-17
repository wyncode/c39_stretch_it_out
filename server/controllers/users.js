const User = require('../db/models/user');
const jwt = require('jsonwebtoken');

//Create a new user//

exports.createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    personType,
    stretchingLevel,
    timeDedicated
  } = req.body;
  try {
    const user = new User({
      firstName: name[0],
      lastName: name[1],
      email,
      password,
      personType,
      stretchingLevel,
      timeDedicated
    });
    const token = await user.generateAuthToken();

    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
