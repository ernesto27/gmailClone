App.Views.sidebarLeft = Backbone.View.extend({
	template: _.template($("#sidebar-left").html()),

	events: {
		'click #add-mail': 'addMail'
	},

	render: function(){
		this.$el.html(this.template());
		return this;
	},

	addMail: function(){
		//console.log("add email")
	}
});


App.Views.NewMail = Backbone.View.extend({
	template: _.template($("#new-email-tpl").html()),
	className: "wrap-new-email",

	events:{
		"click #btn-new-email" : "sendEmail"
	},

	sendEmail: function(){
		console.log(routerMail.navigate("/", {trigger: true}));
		return;
		var destinatario = this.$el.find("#destinatario-email");
		var subject      = this.$el.find("#subject-email");
		var body         = this.$el.find("#body-email");
		
		var newMail = new App.Models.Mail({
			subject: subject.val(),
			body: body.val()
		});

		newMail.save({},{
			success: function(){
				console.log("OK")
				var successMessage = $("#success-message");
				successMessage.show();

				setTimeout(function(){
					successMessage.fadeOut();
				}, 2500);

			},
			error: function(error){
				console.log(error);
			}
		});	

	},

	render: function(){
		this.$el.html(this.template());
		return this;
	}
});