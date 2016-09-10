'use strict';

const express = require('express');
const path = require('path');

module.exports = function (app) {
    require('./api')(app);
    require('./partials')(app);
};
