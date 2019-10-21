const express = require('express');
const router = express.Router();



// ======== Home =============//

router.get('/', (req, res) => {
  res.sendFile('views/index.html', {
    root: `${__dirname}/../`
  });
});

//signup route
router.get('/signup', (req, res) => {
  res.sendFile('views/signup.html', {
    root: `${__dirname}/../`
  });
});


// Login route
router.get('/login', (req, res) => {
  res.sendFile('views/login.html', {
    root: `${__dirname}/../`
  });
});

// events route
router.get('/events', (req, res) => {
  res.sendFile('views/signup.html', {
    root: `${__dirname}/../`
  });
});

// User account
router.get('/account', (req, res) => {
  res.sendFile('views/account.html', {
    root: `${__dirname}/../`
  });
});


module.exports = router;

