const express = require('express');
const passport = require('passport');
const User = require('./users.model');
const router = express.Router();

// const db = require('../../init/db');

// router.get('/all', function(req, res) {
//     res.send("lalalal");
// });

router.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

module.exports = router