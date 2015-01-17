ProjectBoard.Models.Project = Backbone.Model.extend({
	urlRoot: "/projects",

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
	}

});
