var express 		= require ('express');
var morgan 			= require('morgan');
var bodyParser 	= require('body-parser');
var path 				= require('path');
var mongoose 		= require('mongoose');

var app 				= express();
var port				= process.env.PORT || 8000;
var router			= express.Router();

var appRoutes   = require('./app/routes/api')(router);


// middle ware
	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended : true}));
	app.use(express.static(__dirname + '/public'));

// mongodb connection check
	mongoose.connect('mongodb://localhost/demoAppDb');

	var db = mongoose.connection;

	db.on('error', console.error.bind(console, 'connection error:'));

	db.once('open', function() {
	  // we're connected!
			console.log('Mongo Is Now Connected');
	});


// api router
	app.use('/api',appRoutes);


// path for the static content or web
	app.get('*',function(req,res){
		res.sendFile(path.join(__dirname + '/public/index.html'))
	});


// server is listening
	app.listen(port,function  () {
		console.log('Running on port '+port);
	});
