const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');




router.post('/signup', ctrl.auth.createUser);
router.post('/login', ctrl.auth.createSession);





module.exports = router;