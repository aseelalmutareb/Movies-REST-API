const express = require('express');
const { addMovie, getHighestRating } = require('../controllers/movieController');
const router = express.Router();

/**
 * @method POST
 * @desc create a new movie
 * @access public
 */
router.post('/add', addMovie);

/**
 * @method GET
 * @desc get the highest rated movie
 * @access public
 */
router.get('/highestRating', getHighestRating)

module.exports = router;