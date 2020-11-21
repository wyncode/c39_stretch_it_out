const router = require('express').Router(),
  {
    logoutUser,
    updateUser,
    uploadAvatar,
    getCurrentUser
  } = require('../../controllers/users');

router.post('/logout', logoutUser);
router.put('/me', updateUser);
router.post('/avatar', uploadAvatar);
router.get('/me', getCurrentUser);

module.exports = router;
