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
    console.log('updateProjects');
    this.refreshSubviews(
      '.project-index', this.collection, ProjectBoard.Views.ProjectListItem);
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
