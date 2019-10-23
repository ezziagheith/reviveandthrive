const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// routes controllers
// ============== User Account =============== //

router.get('/users', ctrl.newUser.showUsers);
router.post('/signup', ctrl.newUser.createUser);
// router.get('/account/:userId', ctrl.newUser.showAccount);





// ================ Admin routes ==================//
router.get('/events', ctrl.event.showEvent);
router.post('/events', ctrl.event.createEvent);

module.exports = router;