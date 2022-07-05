const express = require('express');
const { addFavourite } = require('../controllers/favController');
const router = express.Router();

/**
 * @method POST
 * @desc create a new favourite
 * @access public
 */
router.post('/add', addFavourite);

module.exports = router;