ProjectBoard.Models.User = Backbone.Model.extend({
	urlRoot: "api/users",


	ghProjects: function () {
		this._ghProjects = this._ghProjects || new ProjectBoard.Collections.GithubProjects();
		return this._ghProjects;
	},

	projects: function () {
		return ProjectBoard.Collections.projects.where({owner_id: this.id });
	},

	getCommitCount: function () {
		var commits = this._weeklyCommits = 0;
		_(this.projects()).each(function (project) {
			commits += project.get('commit_count');
		});

		return commits;
	}


});
