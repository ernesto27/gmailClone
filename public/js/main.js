App.Routes.Mail = Backbone.Router.extend({

	routes:{
		'' : 'index',
		'mail/new': 'showNewMail'
	},

	index: function(){
		var mails = new App.Collections.Mail();
		mails.fetch({
			success: function(collection, response, options){
				//console.log(collection)
				//console.log(response)
				//console.log(options)
				var mailsView = new App.Views.Mails({
					collection: collection
				});
				$(".main-content").empty().append(mailsView.render().el);
			},
			error: function(err){
				console.log(err);
			}
		});

		// INIT SIDEBAR LEFT
		var sidebarLeftView = new App.Views.sidebarLeft();
		$(".sidebar-left").empty().append(sidebarLeftView.render().el);

		// HIDE WRAPPER NEW EMAIL
		$(".wrap-new-email").remove();
	},

	showNewMail: function(){
		var newMail = new App.Views.NewMail();
		$(document.body).append(newMail.render().el);
	}
});

var routerMail = new App.Routes.Mail();
Backbone.history.start();






