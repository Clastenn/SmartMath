'use strict';

const express = require('express');
const path = require('path');
const SERVER_PORT = 8080;

module.exports = function (app) {

    app.use(express.static('public'));

    /* Put API routes here */

    app.use(function (req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    app.listen(SERVER_PORT, function () {
        console.log('Example app listening on port ' + SERVER_PORT + '!');
    });
};
