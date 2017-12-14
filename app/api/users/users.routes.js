const express = require('express');
const router = express.Router();

const db = require('../../init/db');


router.get('/all', function(req, res) {
    res.send("lalalal");
});

module.exports = router