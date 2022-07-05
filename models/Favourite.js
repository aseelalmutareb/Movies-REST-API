const mongoose = require('mongoose');

const favSchema = new mongoose.Schema({
    user: mongoose.SchemaTypes.ObjectId,
    movie: mongoose.SchemaTypes.ObjectId,
    comment: String
});

module.exports = mongoose.model("Favourite", favSchema);