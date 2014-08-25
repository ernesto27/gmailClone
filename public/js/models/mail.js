_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

var App = {
	Models: {},
	Views: {},
	Collections: {},
	Routes: {}
};

App.Models.Mail = Backbone.Model.extend({
	url: 'mail',
	defaults:{
		subject: null,
		body: null,
		date: null,
		open: false
	},
});
