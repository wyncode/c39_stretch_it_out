const router = require('express').Router();
const { createUser, loginUser } = require('../../controllers/users');

router.post('/', createUser);
router.post('/login', loginUser);
router.post('/stretches');

module.exports = router;
