const router = require('express').Router(),
  {
    logoutUser,
    updateUser,
    uploadAvatar,
    getCurrentUser,
    incrementDailyStretch
  } = require('../../controllers/users');

router.post('/logout', logoutUser);
router.put('/update', updateUser);
router.post('/avatar', uploadAvatar);
router.get('/me', getCurrentUser);
router.put('/increment', incrementDailyStretch);

module.exports = router;
