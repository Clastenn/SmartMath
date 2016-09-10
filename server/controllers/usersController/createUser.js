'use strict';

const User = require('mongoose').model('User');

module.exports = function (req, res, next) {
    User.create(req.body, function (err, user) {
        if (err) {
            // console.log(req.body + "\n " + err);
            // console.log(Object.keys(req.body));
            // console.log(req.body.name);
            res.status(400).send({message: "Database error"});
        }

        res.status(200).send(user);
    });
};