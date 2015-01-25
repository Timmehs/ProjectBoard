ProjectBoard.Views.ProjectIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],
  className: "row",

  initialize: function (models, options) {
    this.collection.fetch();
    this.users = ProjectBoard.Collections.users;
    this.listenTo(this.users, "sync", this.updateHackers);
    this.listenTo(this.collection, "sync", this.updateProjects);
  },

  render: function() {
    var content = this.template({ projects: this.collection });
    this.$el.html(content);
    this.updateHackers();
    return this;
  },

  updateProjects: function() {
    var view = this;
		this.clearSelector('.project-index');
    _.each(this.collection.models, function (project) {
      var projectView =
        new ProjectBoard.Views.ProjectListItem({ model: project });
      view.addSubview('.project-index', projectView);
    });

    this.renderSubviews('.project-index');
  },

  updateHackers: function() {
    var view = this;
    this.clearSelector('.hacker-index');
    _(this.users.models).each(function (user) {
      var userView = new ProjectBoard.Views.HackerView({ model : user });
      view.addSubview('.hacker-index', userView);
    });

    this.renderSubviews('.hacker-index');
  },






});
