'use strict';
const controllers = require('../../controllers');

module.exports = function (app, router) {
    router.get('/users', controllers.users.getAllUsers);
    router.get('/users/:id', controllers.users.getUserById);
    router.post('/users', controllers.users.createUser);
    router.put('/users/:id', controllers.users.updateUserById);
    router.delete('/users/:id', controllers.users.deleteUserById);
};