ProjectBoard.Views.ProjectIndex = Backbone.CompositeView.extend({
  template: JST['users/hacker_index_item'],

  initialize: function() {
    this.listenTo(this.collection, "sync change add");
  },

  render: function() {
    var content = this.template({ users: this.collection });
    this.$el.html(content);
    return this;
  },


});
