'use strict';

const User = require('mongoose').model('User');

module.exports = function (req, res, next) {
    var updatedUserData = req.body;
    var updatedId = req.body_id;
    delete updatedUserData._id;
    delete updatedUserData.$promise;
    delete updatedUserData.$resolved;

    User.update({_id: updatedId}, updatedUserData, {runValidators: true})
        .exec(function (err, user) {
            if (err || !user) {
                return res.status(400).send({message: "Database error"});
            }

            res.status(200).end();
        });
};
    