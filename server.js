'use strict';

const express = require('express');
const app = express();

require('./server/mongoose.js')();
require('./server/router.js')(app);
