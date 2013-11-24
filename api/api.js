"use strict";
var express = require("express"),
	mongo = require("mongodb"),
	MongoStore = require('connect-mongo')(express);



var app = express();

app.configure(function(){
	app.use(express.static(__dirname + '/../estatico'));
	express.logger();
	app.use(express.cookieParser());
	app.use(express.bodyParser());
	app.use(
		express.session({
			secret : "la canaco",
			cookie : {
				maxAge : 60000 * 60 * 24 * 30, //30 dias
				store : new MongoStore(
					{db : "tianguis"}
				)
			}
		})
	);
	app.use(app.router);
});



app.all("*",function(req,res,next){
	res.header('Access-Control-Allow-Credentials', true);
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
	next();
});

app.get('/',function(req,res){
	res.redirect('/index.html');
});

app.post("/login", function(req, res){
	//checar el nombre de usuario y password
	if(req.body.username){
		res.json({
			username : "prueba",
			nivel : 1
		});
	}else{
		res.send(401);
	}
});

app.get("/loggedin",function(req,res){
	//decimos si el usuario esta firmado o no
	res.send("ok ... !");
});

app.get("/logout",function(req,res){
	//cerramos la sesión del usuario
	res.send("ok ... !");
});


app.listen(8000);