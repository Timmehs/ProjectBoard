ProjectBoard.Collections.GithubProjects = Backbone.Collection.extend({
  url: function() {
    var user = currentUser.get('username');
    return "http://api.github.com/users/" + user + "/repos";
  },

});
