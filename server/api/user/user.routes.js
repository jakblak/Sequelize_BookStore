const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/allUsers', controller.allUsers);
router.get('/:id', controller.singleUser);
router.put('/saveUserFav', controller.saveUserFav)
router.post('/addUser', controller.saveUser);

module.exports = router;
