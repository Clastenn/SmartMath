'use strict';

const mongoose = require('mongoose');

const MONGO_DB_URI =  'mongodb://account:kartof98@ds019986.mlab.com:19986/acoounts';

//const MONGO_DB_URI =  'mongodb://localhost/test';

module.exports = function () {
    mongoose.connect(MONGO_DB_URI);
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function () {
        console.log('db connected');
    });

    require('./models');
};
