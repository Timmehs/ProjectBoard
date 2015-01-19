ProjectBoard.Views.GithubListItem = Backbone.View.extend({
  template: JST['projects/github_list_item'],

  render: function() {
    var content = this.template({ project: this.model });
    this.$el.html(content);
    return this;
  }
});
