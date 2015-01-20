ProjectBoard.Collections.Projects = Backbone.Collection.extend({
	model: ProjectBoard.Models.Project,
	url: 'api/projects',
});


ProjectBoard.Collections.projects = new ProjectBoard.Collections.Projects();