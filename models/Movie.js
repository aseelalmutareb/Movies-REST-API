const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { 
        type: String,
        required: true
    },
    rating: Number,
    genre: String,
    plot: String,
    cast: [String],
    releaseDate: Date,
    duration: String,
    language: String
});

movieSchema.statics.findHighestRatedMovie = function() {
    return this.find().sort({rating:-1}).limit(1);
};

module.exports = mongoose.model("Movie", movieSchema);