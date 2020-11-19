const router = require('express').Router();
const { createUser, loginUser } = require('../../controllers/users');
const {
  getBodyAreas,
  getStretch,
  getStretchesByBodyArea
} = require('../../controllers/stretches');

router.post('/', createUser);
router.post('/login', loginUser);

router.get('/bodyAreas', getBodyAreas);
router.get('/stretch/:id', getStretch);
router.get('/stretches/:bodyArea', getStretchesByBodyArea);

module.exports = router;
