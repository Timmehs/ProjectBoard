ProjectBoard.Collections.Users = Backbone.Collection.extend({
  url: 'api/users'

});

ProjectBoard.Collections.users = new ProjectBoard.Collections.Users();
ProjectBoard.Collections.users.fetch();
