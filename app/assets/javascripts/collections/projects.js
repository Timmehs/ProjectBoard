ProjectBoard.Collections.Projects = Backbone.Collection.extend({
	model: ProjectBoard.Models.Project,
	url: 'https://api.github.com/users/' + window.currentUser.get('username') + '/repos',
	
});