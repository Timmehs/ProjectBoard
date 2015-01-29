ProjectBoard.Views.ProjectListItem = Backbone.View.extend({
  template: JST['projects/proj_list_item'],
  className: 'project container-fluid',

  render: function() {
      var content = this.template({ project: this.model });
      this.$el.html(content);
      this.setColor(this.model.cpd());
      return this;
  },

  setColor: function (cpd) {
    var colorAdjust = cpd > 10 ? 1 : cpd / 10;
    var alpha = 0.3 * colorAdjust;
    this.$el.css("background-color", "rgba(114, 209, 250, " + alpha + ")");
    console.log("Cpd: " + cpd + ", alpha: " + alpha);
  }
});
