ProjectBoard.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "home",
  },
	
	initialize: function() {
		this.$rootEl = $("#main-wrapper");
	},
	
	home: function() {
		console.log('home');
	}
	
	
});