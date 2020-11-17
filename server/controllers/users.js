const User = require('../db/models/user');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;

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
    const token = await user.generateToken();

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

///////////////////FOR SECURE ROUTES//////////////////////////
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
//UPDATE USER
exports.updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'firstName',
    'lastName',
    'email',
    'password',
    'personType',
    'stretchingLevel',
    'timeDedicated',
    'avatar',
    'stretches'
  ];
  const isValid = updates.every((update) => allowedUpdates.includes(update));
  if (!isValid)
    return res.status(400).json({ error: 'You cannot update this field' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//UPLOAD AVATAR//////
exports.uploadAvatar = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
