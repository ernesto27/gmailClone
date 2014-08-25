var Sequelize = require("sequelize");

var sequelize;

if (process.env.HEROKU_POSTGRESQL_CHARCOAL_URL) {
	// the application is executed on Heroku ... use the postgres database
	var match = process.env.HEROKU_POSTGRESQL_CHARCOAL_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/)

	sequelize = new Sequelize(match[5], match[1], match[2], {
		dialect:  'postgres',
	  	protocol: 'postgres',
	  	port:     match[4],
	  	host:     match[3],
	  	logging:  true //false
	});

} else {
	// the application is executed on the local machine ... use mysql
	//sequelize = new Sequelize('example-app-db', 'root', null)
	sequelize = new Sequelize( "gmail", 'postgres', "1234", {
		host: "localhost",
		port: 5432 ,
		dialect: 'postgres'
	});

}


var Mail = sequelize.define("mail", {
    subject:    { type: Sequelize.STRING },
    body:       { type: Sequelize.TEXT },
    sender_id:   { type: Sequelize.INTEGER},
    receiver_id: { type: Sequelize.INTEGER},
    open:		{ type: Sequelize.INTEGER, defaultValue: 0},
    conversation_id:   { type: Sequelize.INTEGER},
});

Mail.sync().success(function(){
	console.log("table created Mail")
}).error(function(err){
	console.log(err);
});


exports.Mail =  Mail;
