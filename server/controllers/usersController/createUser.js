'use strict';

const User = require('mongoose').model('User');

module.exports = function (req, res, next) {
    User.create(req.body, function(err, user) {
        if(err) {
            res.status(400).send({message: "Database error"});
        }

        res.status(201).send(user);
    });
};