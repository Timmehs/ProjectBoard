ProjectBoard.Collections.Users = Backbone.Collection.extend({
  url: 'api/users',
  model: ProjectBoard.Models.User 
});

ProjectBoard.Collections.users = new ProjectBoard.Collections.Users();
ProjectBoard.Collections.users.fetch();
