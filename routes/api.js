const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// routes controllers
router.post('/signup', ctrl.auth.createUser);
router.post('/login', ctrl.auth.createSession);
router.delete('/logout', ctrl.auth.deleteSession);
router.get('/verify', ctrl.auth.verifyAuth);



// ============== User Account =============== //
router.get('/users', ctrl.auth.showUsers);
router.get('/account/:userId', ctrl.auth.showAccount);




// ================ Admin routes ==================//
router.get('/events', ctrl.event.showEvent);
router.post('/events', ctrl.event.createEvent);

module.exports = router;