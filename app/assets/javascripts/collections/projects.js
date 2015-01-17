ProjectBoard.Collections.Projects = Backbone.Collection.extend({
	model: ProjectBoard.Models.Project,
	url: '',
	initialize: function(options) {
		if (options && options.user) {
			this.url = 'https://api.github.com/users/' + options.user.get('username') + '/repos';
		} else {
			this.url = "api/projects";
		}
	},


});
