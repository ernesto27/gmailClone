var express = require("express");
var path 	= require("path");
var app  	 = express();

app.configure(function(){
	app.use(express.json());
	app.use(express.static(path.join(__dirname, 'public')));
});


app.get("/", function(req, res){
	res.render("index.ejs");
});

/* ROUTER MAIL
 * /mail/ 
 * for now get all mails
*/

app.get("/mail", function(req, res){
	var objResponse = [
		{
			subject: "sub1",
			body: "body1"
		},
		{
			subject: "sub2",
			body: "body2"
		}
	]
	res.json(objResponse)
});

/*
	mail/:id 
	mail/:id 
*/




app.listen(3000);