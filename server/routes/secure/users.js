const router = require('express').Router(),
  {
    logoutUser,
    loginUser,
    updateUser,
    uploadAvatar
  } = require('../../controllers/users');

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.put('/me', updateUser);
router.post('/avatar', uploadAvatar);

module.exports = router;
