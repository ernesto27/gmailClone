App.Views.Mail = Backbone.View.extend({
	tagName: 'li',
	className: 'list-group-item',

	template: _.template("{{ subject }} <div class='pull-right'>{{ moment(createdAt).calendar() }}</div>"),

	render: function(){
		var html = this.template(this.model.toJSON());
		this.$el.html(html);
		return this;
	}

});


App.Views.Mails = Backbone.View.extend({
	tagName: 'ul',
	className: 'list-group',

	render: function(){
		this.collection.each(function(model){
			var mailView = new App.Views.Mail({
				model: model
			});
			this.$el.append(mailView.render().el);
		}, this);
		
		return this;
	}
});
