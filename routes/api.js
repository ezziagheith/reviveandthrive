const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// routes controllers
router.post('/signup', ctrl.auth.createUser);
router.post('/login', ctrl.auth.createSession);
router.delete('/logout', ctrl.auth.deleteSession);
router.get('/verify', ctrl.auth.verifyAuth);



// ============== User Account =============== //
router.get('/account/:userId', ctrl.auth.showAccount);


module.exports = router;