const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// routes controllers
// ============== User Account =============== //

router.get('/users', ctrl.newUser.showUsers);
router.post('/signup', ctrl.newUser.createUser);
router.post('/login', ctrl.auth.createSession);
//router.get('/account/:id', ctrl.newUser.getAccount);

<<<<<<< HEAD
router.get('/account', ctrl.account.showAccount);
router.post('/account', ctrl.newUser.createSession);
router.get('/account/:id', ctrl.account.getAccount);
=======
router.get('/account/:id', ctrl.account.showAccount);

>>>>>>> submaster


// ================ Admin routes ==================//
router.get('/events', ctrl.event.showEvent);
router.post('/events', ctrl.event.createEvent);

module.exports = router;