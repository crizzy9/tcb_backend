const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
    secret: 'secret?notsomuch',
    userProperty: 'payload'
});

var profile = require('./profile');
var userAuth = require('./authentication');

router.get('/profile', auth, profile.profileRead);

router.post('/register', userAuth.register);
router.post('/login', userAuth.login);

module.exports = router;