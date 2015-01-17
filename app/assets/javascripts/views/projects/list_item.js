ProjectBoard.Views.ProjectListItem = Backbone.View.extend({
  template: JST['projects/proj_list_item'],
  className: 'project container-fluid',

  render: function() {
      var content = this.template({ project: this.model });
      this.$el.html(content);
      return this;
    }
});
