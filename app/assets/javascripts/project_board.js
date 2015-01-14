window.ProjectBoard = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new ProjectBoard.Routers.Router();
		Backbone.history.start();
  }
}

$(function() {
  ProjectBoard.initialize()
});
