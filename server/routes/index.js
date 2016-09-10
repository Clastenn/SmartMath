'use strict';

const express = require('express'),
    router = express.Router();

module.exports = function (app) {
    require('./api')(app);
    require('./partials')(app);

    app.use('/api', router);

};
