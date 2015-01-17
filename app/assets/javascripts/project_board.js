window.ProjectBoard = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new ProjectBoard.Routers.Router();
		Backbone.history.start();
  }
};

Backbone.CompositeView = Backbone.View.extend({

  addSubview: function (selector, view) {
    var selectorSubviews =
    this.subviews[selector] || (this.subviews[selector] = []);
    selectorSubviews.push(view);
  },

  renderSubviews: function () {
    var view = this;
    _(this.subviews).each(function (selectorSubviews, selector) {
      var $selectorEl = view.$(selector);
      $selectorEl.empty();
      _(selectorSubviews).each(function (subview) {
        $selectorEl.append(subview.render().$el);
      });
    });
  },

  subviews: {}
});

$(ProjectBoard.initialize);
