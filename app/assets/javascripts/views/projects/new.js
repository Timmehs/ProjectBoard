ProjectBoard.Views.NewProject = Backbone.CompositeView.extend({
  template: JST['projects/new'],

  events: {
    "click button.gh-project-btn" : "populateForm",
    "submit form" : "addProject"
  },

  addProject: function(event) {
    event.preventDefault();
    var $formErrorView = this.$('.form-errors');
    var projectParams = $(event.currentTarget).serializeJSON();
    ProjectBoard.Collections.projects.create(projectParams, {
      wait: true,
      success: function() {
        console.log('success');
      },
      error: function(data, response) {
        var errors = $.parseJSON(response.responseText).errors;
        $formErrorView.empty();
        _.each(errors, function(error) {
          if (error !== "Uid can't be blank" ) {
              $formErrorView.append(
                "<span class='error'>" +
                  "<i class='fa fa-exclamation-circle'></i> "
                  + error +
                "</span>");
          };
        });
        $formErrorView.append("<i class='fa fa-plus-circle close'></i>");
        $formErrorView.addClass("active");
        this.$('i.close').on('click', function() {
          $formErrorView.removeClass('active');
        });
      },
    })
  },

  initialize: function() {
    this.collection = currentUser.ghProjects();
    this.listenTo(this.collection, "sync", this.updateSubviews);
  },

  populateForm: function(event) {
    var gProjectId = $(event.currentTarget).data('id');
    var gProject = this.collection.find({ id: gProjectId });
 	 	$('#project-uid').val(gProjectId);
    $('.project-title').html(gProject.get('name'));
    $("#project-title").val(gProject.get('name'));
    $('#project-tags').val(gProject.get('language'));
    $('.project-tags').html("#" + gProject.get('language') );
    $('#project-desc').val(gProject.get('description'));
    $('#project-github').val(gProject.get('html_url'));
    $('#project-homepage').val(gProject.get('homepage'))
  },

  render: function(){
    var content = this.template();
    this.$el.html(content);
    this.updateSubviews();
    return this;
  },

  updateSubviews: function() {
    var view = this;
    _.each(this.collection.models, function(project) {
      var projectView =
      new ProjectBoard.Views.GithubListItem({ model: project });
      view.addSubview('.github-list', projectView);
    });

    this.renderSubviews();
  }
});
