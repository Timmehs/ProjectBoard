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
    this.subviews()[selector] || (this.subviews()[selector] = []);
    selectorSubviews.push(view);
  },

	clearSelector: function(selector) {
		_(this.subviews()[selector]).each(function(view) {
			view.remove();
		});

		this.subviews()[selector] = [];
	},

  removeSubview: function (selector, subview) {
    var selectorSubviews =
      this.subviews()[selector] || (this.subviews()[selector] = []);

    var subviewIndex = selectorSubviews.indexOf(subview);
    selectorSubviews.slice(subviewIndex, 1);
    subview.remove();
  },

  renderSubviews: function (selector) {
    var view = this;

    // If selector given, only render those subviews
    if (selector) {
      var $selector = view.$(selector);
      $selector.empty();
      _(this.subviews()[selector]).each(function (subview) {
        $selector.append(subview.render().$el);
      });
    }

    // Else render all subviews
    else {
      _(this.subviews()).each(function (selectorSubviews, selector) {
        var $selectorEl = view.$(selector);
        $selectorEl.empty();
        _(selectorSubviews).each(function (subview) {
          $selectorEl.append(subview.render().$el);
        });
      });
    }
  },

  refreshSubviews: function (selector, collection, viewtype) {
    var view = this;
    var $selectorEl = $(selector);

    this.clearSelector(selector);
    _(collection.models).each(function (thisModel) {
      var newSubview = new viewtype({ model: thisModel });
      view.addSubview(selector, newSubview);
    });

    this.renderSubviews(selector);
  },

  subviews: function() {
    this._subviews = this._subviews || {};

    return this._subviews;
  }
});

$(ProjectBoard.initialize);
