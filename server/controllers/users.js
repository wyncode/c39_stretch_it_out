const User = require('../db/models/user');
const jwt = require('jsonwebtoken');

//Create a new user//

exports.createUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    personType,
    stretchingLevel,
    timeDedicated
  } = req.body;
  try {
    const user = new User({
      firstName,
      lastName,
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
      secure: process.env.NODE_ENV === 'production'
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//LOGIN USER
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV === 'production'
    });
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//LOGOUT USER
exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(({ token }) => {
      return token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'User has been logged out' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
