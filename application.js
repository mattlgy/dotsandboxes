var express = require('express');
var app = express();

app.configure(function () {
	app.use(express.static('static'));
});


app.listen(22863);
