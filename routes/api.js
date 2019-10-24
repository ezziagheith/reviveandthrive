const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// routes controllers
// ============== User Account =============== //

router.get('/users', ctrl.newUser.showUsers);
router.post('/signup', ctrl.newUser.createUser);
router.post('/login', ctrl.auth.createSession);
router.get('/account/:id', ctrl.account.showAccount);
router.put('/users/:id', ctrl.newUser.updateUser);
router.put('/users/:id/addevent', ctrl.account.addEvent);
// router.delete('/users/:id', ctrl.newUser.destroy);
// router.delete('/events/:id', ctrl.account.destroy);



// ================ Admin routes ==================//
router.get('/events', ctrl.event.showEvent);
router.post('/events', ctrl.event.createEvent);
router.put('/events/:id', ctrl.event.updateEvent);

module.exports = router;