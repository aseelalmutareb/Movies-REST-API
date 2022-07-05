const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number,
    email: {
        type: String,
        required: true,
        lowercase: true,
        validate: {
            validator: v => v.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),
            message: props => `${props.value} is not a valid email`
        }
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);