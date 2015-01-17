ProjectBoard.Collections.Projects = Backbone.Collection.extend({
	model: ProjectBoard.Models.Project,
	url: '',
	initialize: function(options) {
		this.user = options.user;
		this.url = 'https://api.github.com/users/' + this.user.get('username') + '/repos';
		console.log(options.user);
	},
	
	
});