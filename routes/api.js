const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// routes controllers
router.post('/signup', ctrl.auth.createUser);
router.post('/login', ctrl.auth.createSession);
router.post('/deletesection', ctrl.auth.deleteSession);
router.post('/verify', ctrl.auth.verifyAuth);





module.exports = router;