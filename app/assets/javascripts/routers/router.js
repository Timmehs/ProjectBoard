ProjectBoard.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "home",
  },
	
	initialize: function() {
		this.$rootEl = $("#main-wrapper");
		window.currentUser = new ProjectBoard.Models.User({id: CURRENT_USER});
		currentUser.fetch({
			success: function() {
				window.projects = new ProjectBoard.Collections.Projects();
			}
		});
	},
	
	home: function() {
		console.log('home');
	}
	
	
});