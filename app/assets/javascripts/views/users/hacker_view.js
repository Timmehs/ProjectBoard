ProjectBoard.Views.HackerView = Backbone.CompositeView.extend({
  template: JST['users/hacker_view'],


  render: function() {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },



});
