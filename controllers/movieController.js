const Movie = require('../models/Movie');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @desc add a new movie
 */
const addMovie = async (req, res) => {
    const {
        title,
        rating,
        genre,
        plot,
        cast,
        releaseDate,
        duration,
        language
    } = req.body;

    try{
        const newMovie = await Movie.create({
            title,
            rating,
            genre,
            plot,
            cast: cast && cast.split(","), // make sure cast has a value before splitting it
            releaseDate,
            duration,
            language
        });
        res.json(newMovie);
    } catch (e) {
        res.json(e.message);
    }
};

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @desc get the movie with the highest rating
 */
const getHighestRating = async (req, res) => {
    const movie = await Movie.findHighestRatedMovie();
    movie && res.json(movie); 
};

module.exports = {
    addMovie,
    getHighestRating
};