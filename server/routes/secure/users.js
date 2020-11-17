const router = require('express').Router(),
  { logoutUser, loginUser, updateUser } = require('../../controllers/users');

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.put('/me', updateUser);

module.exports = router;
