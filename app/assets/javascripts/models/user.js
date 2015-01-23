ProjectBoard.Models.User = Backbone.Model.extend({
	urlRoot: "api/users",

	ghProjects: function() {
		this._ghProjects = this._ghProjects || new ProjectBoard.Collections.GithubProjects();
		return this._ghProjects;
	},

	projects: function() {
		return ProjectBoard.Collections.projects.where({owner_id: this.id });
	},

	// Get last-commit-shas of all branches by project
	getProjectBranches: function() {
		var username = this.get('username');
		var projectBranches = this._projectBranches = this._projectBranches || {}; // store SHA keys of last commit of each branch

		_.each(this.projects(), function(project) {

			var projectName = project.get('name');

			$.get('https://api.github.com/repos/' + username + '/' + projectName + '/branches',
				function(branches) {
					_.each(branches, function(branch) {
						if (projectBranches[projectName] == null) {
							projectBranches[projectName] = [branch.commit.sha];
						} else {
							projectBranches[projectName].push(branch.commit.sha);
						}
					});
			});
			// var getAllProjectCommits = function()


		});

	},

	getCommitCount: function() {
		this._weeklyCommits = 0;
		var user = this;
		var username = this.get('username');
		var oneWeekAgo = moment().subtract(7, 'days').format();

		for (project in this._projectBranches) {
			var branches = this._projectBranches[project];
			var commitQueryUrl =
				"https://api.github.com/repos/" + username + "/" + project +
				"/commits?per_page=1000&sha=" + branches[0] +
				"&since=" + oneWeekAgo;

			$.get(commitQueryUrl, function(commits) {
				user._weeklyCommits += commits.length;
			});
		}

	}



// https://api.github.com/' + this.username + '/ProjectBoard/commits?per_page=1000&sha=e7a098f1336c46cfc52001dec31f6241fd4d5f4b&since=2015-01-16T21:10:12-8:00Z

});
