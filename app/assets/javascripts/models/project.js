ProjectBoard.Models.Project = Backbone.Model.extend({
	urlRoot: "api/projects",

	pbScore: function() {

		// TODO: devise calculation of project_board score for project
		// based on user 'karma' and project stats

		Math.floor(Math.random() * 100);
	},

	authorGithub: function() {
		return "http://github.com/" + this.authorName();
	},

	authorName: function() {
		return this.get('author').username;
	},

	ghUrl: function() {
		return "http://api.github.com/repos/" + this.authorName() + "/" + this.get('name');
	},

	weekInCommits: function(success) {
		var ownerCommits = [];
		$.get(this.ghUrl() + "/stats/participation", function(obj, code) {
			ownerCommits = obj.owner[51];
			success.call(ownerCommits);
		});


	}

});
