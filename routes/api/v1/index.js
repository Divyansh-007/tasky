// required libraries
const express = require('express');

const router = express.Router();

router.use('/tasks',require('./task'));

router.use('/user',require('./user'));

module.exports = router;