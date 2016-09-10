'use strict';
const express = require('express');

const router = express.Router();
const database = require("../../database");

module.exports = function (app) {
	require('./users')(app, router);
	require('./problems')(app, router);
};