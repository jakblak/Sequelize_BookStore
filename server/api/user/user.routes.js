const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/', controller.test);

module.exports = router;