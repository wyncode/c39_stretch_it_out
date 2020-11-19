const router = require('express').Router(),
  { logoutUser, updateUser, uploadAvatar } = require('../../controllers/users');

router.post('/logout', logoutUser);
router.put('/me', updateUser);
router.post('/avatar', uploadAvatar);

module.exports = router;
