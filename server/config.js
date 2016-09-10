	
var cookieSession = require('cookie-session');

module.export = function (app){
	app.use(cookieSession());
}