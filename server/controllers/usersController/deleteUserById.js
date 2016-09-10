'use strict';

const User = require('mongoose').model('User');

module.exports = function (req, res, next) {
    User.remove({_id: req.params.id})
        .exec(function (err, user) {
            if (err || !user) {
                return res.status(400).send({message: "Database error"});
            }

            res.status(204).send('true');
        });
};