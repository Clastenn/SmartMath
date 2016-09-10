'use strict';
const express = require('express');
const path = require('path');

const INDEX_PATH = path.join(__dirname, '../../public/index.html');

module.exports = function (app) {

    app.use(express.static('public'));

    app.all('*', function (req, res) {
        res.sendFile(INDEX_PATH);
    });
};