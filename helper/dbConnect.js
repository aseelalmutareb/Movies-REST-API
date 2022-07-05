const mongoose = require('mongoose');
const config = require('config');
const DB = config.get('db.uri');

const connect = async () => {
    await mongoose.connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => console.log('DB is connected'));
};

module.exports = connect;