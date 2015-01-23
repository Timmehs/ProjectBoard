ProjectBoard.Views.ProjectIndex = Backbone.CompositeView.extend({
  template: JST['projects/index'],

  initialize: function(models, options) {
    this.collection.fetch();
    this.users = ProjectBoard.Collections.users;
    this.listenTo(this.collection, "sync", this.updateSubviews);
    this.listenTo(this.users, "sync change", this.userChange);
  },

  render: function() {
    console.log('index render');
    var content = this.template({ projects: this.collection });
    this.$el.html(content);
    return this;
  },

  updateSubviews: function() {
    var view = this;
		this.clearSubviews('.pi');
    _.each(this.collection.models, function(project) {
      var projectView =
        new ProjectBoard.Views.ProjectListItem({ model: project });
      view.addSubview('.pi', projectView);
    });

    this.renderSubviews();
  },

  userChange: function() {
    console.log('user change');
  }

});
