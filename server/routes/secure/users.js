const router = require('express').Router(),
  { logoutUser, loginUser } = require('../../controllers/users');

router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;
