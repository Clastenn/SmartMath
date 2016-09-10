'use strict';

const express = require('express');
const app = express();
const SERVER_PORT = 8080;

require('./server/mongoose')();
require('./server/routes')(app);


app.listen(SERVER_PORT, function () {
    console.log('Example app listening on port ' + SERVER_PORT + '!');
});