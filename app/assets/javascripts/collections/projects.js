ProjectBoard.Collections.Projects = Backbone.Collection.extend({
	model: ProjectBoard.Models.Project,
	url: 'api/projects',

	comparator: function(p) {
		return -p.get('commit_count');
	}
});


ProjectBoard.Collections.projects = new ProjectBoard.Collections.Projects();
ProjectBoard.Collections.projects.fetch();
