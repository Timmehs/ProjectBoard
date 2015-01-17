ProjectBoard.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "home",
  },

	initialize: function() {
		this.$rootEl = $("#main-wrapper");
		window.currentUser = new ProjectBoard.Models.User({id: CURRENT_USER});
	},

	home: function() {
		if (signedIn()) {
      var projects = new ProjectBoard.Collections.Projects();
      var view = new ProjectBoard.Views.ProjectIndex({
        collection: projects
      });
      this._swapView(view);
    }
	},

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    this._currentView = view;
  }


});

var signedIn = function() {
  return currentUser.id != 0;
};
