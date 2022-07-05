const express = require('express');
const { addUser } = require('../controllers/userController');
const router = express.Router();

/**
 * @method POST
 * @desc create a new user
 * @access public
 */
router.post('/add', addUser);

module.exports = router;