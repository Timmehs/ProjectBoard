ProjectBoard.Models.User = Backbone.Model.extend({
	urlRoot: "api/users",

	ghProjects: function() {
		this._ghProjects = this._ghProjects || new ProjectBoard.Collections.GithubProjects();
		return this._ghProjects;
	},

	projects: function() {
		return ProjectBoard.Collections.projects.where({owner_id: this.id });
	},


	weekInCommits: function() {

	},



});
