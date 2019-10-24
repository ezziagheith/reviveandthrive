const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// routes controllers
// ============== User Account =============== //

router.get('/users', ctrl.newUser.showUsers);
router.post('/signup', ctrl.newUser.createUser);
router.post('/login', ctrl.auth.createSession);
router.get('/account/:id', ctrl.account.getAccount);
router.put('/users/:id', ctrl.newUser.updateUser);
router.delete('/user/:id', ctrl.newUser.destroy);
router.delete('/events/:id', ctrl.event.destroy);
router.put('/users/:id/addevent', ctrl.account.addEvent);




// ================ Admin routes ==================//
router.get('/events', ctrl.event.showEvent);
router.post('/events', ctrl.event.createEvent);
router.put('/events/:id', ctrl.event.updateEvent);


module.exports = router;