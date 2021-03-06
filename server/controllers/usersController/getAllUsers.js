'use strict';

const User = require('mongoose').model('User');

module.exports = function (req, res, next) {
    User.find().exec(function (err, collection) {
        if (err) {
            res.status(400).send({message: "Database error"});
        }

        res.status(200).send(collection);
    });
};