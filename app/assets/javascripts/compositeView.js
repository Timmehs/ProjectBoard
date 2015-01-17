Backbone.CompositeView = Backbone.View.extend({

  addSubview: function (selector, view) {
    var selectorSubviews =
    this.subViews[selector] || (this.subviews[selector] = []);
    selectorSubviews.push(view);
  },

  renderSubviews: function () {
    _(this.subviews).each(function (selectorSubviews, selector) {
      _(selectorSubviews).each(function (subview) {
        subview.render();
      });
    });
  },

  subviews: {}
});
