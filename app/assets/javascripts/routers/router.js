ProjectBoard.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "home",
  },

	initialize: function() {
		this.$rootEl = $("#main-wrapper");
		window.currentUser = new ProjectBoard.Models.User({id: CURRENT_USER});
		currentUser.fetch();
	},

	home: function() {
		console.log('home');
	}


});
