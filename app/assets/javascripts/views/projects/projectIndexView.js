ProjectBoard.Views.ProjectIndex = Backbone.View.extend({
  template: JST['projects/index'],
  className: "pi",

  initialize: function(models, options) {
    this.listenTo(this.collection, "sync", console.log('pIndex: We gotta sync!'));
  },

  render: function() {
    console.log('index render');
    var content = this.template({ projects: this.collection });
    this.$el.html(content);
  }

});
