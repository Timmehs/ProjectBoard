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

var showNotice = function(msg) {
  $('.notice').html(msg);
  $('.notice').addClass('notifying');
  setTimeout(function() { $('.notice').removeClass('notifying'); }, 3000 );
};
