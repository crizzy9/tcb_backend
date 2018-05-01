const express = require('express');
const router = express.Router();

// all routers
const userRouter = require('./users/users.routes');
const aboutRouter = require('./about/about.routes');
const playgroundRouter = require('./playground/playground.routes');

router.use('/users', userRouter);
router.use('/about', aboutRouter);
router.use('/playground', playgroundRouter);


module.exports = router