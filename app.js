var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/javascripts'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/success', function(req, res){
	res.render('success');
});

app.post('/formsubmit', function(req, res){
		res.redirect('/success');
		console.log(req.body.email);
});

var server = app.listen(8298, function() {
	console.log('Express server listening on port ' + server.address().port);
});
