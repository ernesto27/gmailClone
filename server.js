var express  = require("express");
var path 	 = require("path");
var app  	 = express();
var database = require("./database");

app.configure(function(){
	app.use(express.json());
	app.use(express.static(path.join(__dirname, 'public')));
});


app.get("/", function(req, res){
	res.render("index.ejs");
});

/* ROUTER MAIL
 * /mail
 * for now get all mails
*/

app.get("/mail", function(req, res){
	database.Mail.findAll().complete(function(err, response){
		if(err) res.json(err);
		res.json(response);
	})
});


/*
 * METHOD: POST
 * /mail
 * save a new user	
*/

app.post("/mail", function(req, res){
	var attrObj = {
		subject: req.body.subject,
		body: req.body.body,
		sender_id: 1,
		receiver_id: 2,
		conversation_id: 1
	};

	database.Mail.create(attrObj).complete(function(err, user){
		if(err) res.json(err);
		res.json(user);
	});

});




app.listen(3000);