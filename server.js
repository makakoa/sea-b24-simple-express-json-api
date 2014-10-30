var express = require('express');
var app = express();

app.get('/time', function(req,res) {
	var d = new Date();
	var h = d.getHours();
	var m = d.getMinutes();
	if(m<10) {
		m = "0" + m;
	}
	var data = {
		hour: h,
		minute: m
	};
	res.json(data);
});

app.get('/:name', function(req,res) {
	var data = {
		msg: 'Hello ' + req.params.name + "!"
	};
	res.json(data);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	//console.log('server running on port ' + port);
});
