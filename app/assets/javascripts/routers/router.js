ProjectBoard.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "home",
  },
	
	initialize: function() {
		this.$rootEl = $("#main-wrapper");
		window.currentUser = new ProjectBoard.Models.User({id: CURRENT_USER});
		currentUser.fetch({
			success: function() {
				window.projects = new ProjectBoard.Collections.Projects({
					user: currentUser
				});
				projects.fetch({
					wait: true,
					success: function() {
						_.each(this.projects.models, function(project) {
							$('#main-wrapper').append("<h4>" + project.get('name') + '</h4>');
						});
					}
				});
			}
		});
	},
	
	home: function() {
		console.log('home');
	}
	
	
});

