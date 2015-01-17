ProjectBoard.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "home",
  },

	initialize: function() {
		this.$rootEl = $("#main-wrapper");
		window.currentUser = new ProjectBoard.Models.User({id: CURRENT_USER});
		currentUser.fetch().done(function() {
      notify('Welcome ' + currentUser.get('username'));
    });
	},

	home: function() {
		if (currentUser) {

    }
	},

  _swapView: function(view) {
    this._currentView && this._currentView.remove();
    this.$rootEl.html(view.render().$el);
    this._currentView = view;
  }


});
