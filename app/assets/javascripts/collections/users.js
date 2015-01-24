ProjectBoard.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: ProjectBoard.Models.User
});

ProjectBoard.Collections.users = new ProjectBoard.Collections.Users();
ProjectBoard.Collections.users.fetch({
  success: function() {
    _.each( ProjectBoard.Collections.users.models, function( user ){
      user.getProjectBranches(user.getCommitCount());
      console.log(user);
    });
  }
});
