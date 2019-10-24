const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');



// ======== Routes =============//

// Home route
router.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: `${__dirname}/../`
  });
});

//signup route
router.get('/signup', (req, res) => {
  res.sendFile('views/sign-up.html', {
    root: `${__dirname}/../`
  });
});


// Login route
router.get('/login', (req, res) => {
  res.sendFile('views/log-in.html', {
    root: `${__dirname}/../`
  });
});

// events route
router.get('/events', (req, res) => {
  res.sendFile('views/event.html', {
    root: `${__dirname}/../`
  });
});

// User account
router.get('/account/:id', (req, res) => {
  res.sendFile('views/account.html', {
    root: `${__dirname}/../`
  });
});


// Admin route
router.get('/admin', (req, res) => {
  res.sendFile('views/dasboard/admin.html', {
    root: `${__dirname}/../`
  });
});

module.exports = router;