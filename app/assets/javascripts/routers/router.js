ProjectBoard.Routers.Router = Backbone.Router.extend({
  routes: {
    "" : "home",
    "projects/new" : "newProjectPage"
  },

	initialize: function() {
		this.$rootEl = $("#main-wrapper");
		window.currentUser = new ProjectBoard.Models.User({id: CURRENT_USER});
    currentUser.fetch().done(function(){
      console.log( currentUser.get('username') + ' data acquired');
    });
	},

	home: function() {
		if (signedIn()) {
      var projects = ProjectBoard.Collections.projects;
      var view = new ProjectBoard.Views.ProjectIndex({
        collection: projects
      });
      this._swapView(view);
    }
	},

  newProjectPage: function(event) {
    var view = new ProjectBoard.Views.NewProject({
      collection: currentUser.ghProjects()
    });
    this._swapView(view);
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
