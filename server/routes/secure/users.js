const router = require('express').Router(),
  {
    logoutUser,
    updateUser,
    uploadAvatar,
    getCurrentUser,
    incrementDailyStretch,
    getUserBmi
  } = require('../../controllers/users');

router.post('/logout', logoutUser);
router.put('/update', updateUser);
router.post('/avatar', uploadAvatar);
router.get('/me', getCurrentUser);
router.put('/increment', incrementDailyStretch);
router.get('/bmi', getUserBmi);

module.exports = router;
