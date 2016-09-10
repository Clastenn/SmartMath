'use strict';

module.exports = function (app) {
	//require("./session")(app);
    require('./api')(app);
    require('./partials')(app);
};
