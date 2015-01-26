ProjectBoard.Collections.GithubProjects = Backbone.Collection.extend({
  url: function() {
    var user = currentUser.get('username');
    return "https://api.github.com/users/" + user + "/repos";
  },

});
