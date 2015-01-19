ProjectBoard.Views.NewProject = Backbone.CompositeView.extend({
  template: JST['projects/new'],

  events: {
    "click button" : "populateForm"
  },

  initialize: function() {
    this.collection = currentUser.ghProjects();
    this.listenTo(this.collection, "sync", this.updateSubviews);
  },

  populateForm: function(event) {

  },

  render: function(){
    var content = this.template();
    this.$el.html(content);
    this.updateSubviews();
    return this;
  },

  updateSubviews: function() {
    var view = this;
    console.log('update sv');
    _.each(this.collection.models, function(project) {
      var projectView =
      new ProjectBoard.Views.GithubListItem({ model: project });
      view.addSubview('.github-list', projectView);
    });

    this.renderSubviews();
  }
});
