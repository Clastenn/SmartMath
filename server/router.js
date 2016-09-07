var express = require('express');
var app = express();

module.exports = function(){
	
	app.use(express.static('public'));

	app.get('/kartof', function (req, res) {
	  res.send('Hello Kartof!');
	});
	app.listen(190, function () {
	  console.log('Example app listening on port 190!');
	});
}
