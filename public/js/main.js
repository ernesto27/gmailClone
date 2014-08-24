App.Routes.Mail = Backbone.Router.extend({

	routes:{
		'' : 'index'
	},

	index: function(){
		/*
		var mails = new App.Collections.Mail([
			{
				subject: "subjet1",
				body: "body1"
			},
			{
				subject: "subjet1",
				body: "body1"
			}
		]);

		var mailsView = new App.Views.Mails({
			collection: mails
		});
		$(".main-content").append(mailsView.render().el);
		*/

		var mails = new App.Collections.Mail();
		mails.fetch({
			success: function(collection, response, options){
				//console.log(collection)
				//console.log(response)
				//console.log(options)
				var mailsView = new App.Views.Mails({
					collection: collection
				});
				$(".main-content").append(mailsView.render().el);
			},
			error: function(err){
				console.log(err);
			}
		});
	}
});



var routerMail = new App.Routes.Mail();
Backbone.history.start();


