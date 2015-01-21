ProjectBoard.Views.NewProject = Backbone.CompositeView.extend({
  template: JST['projects/new'],

  events: {
    "click button.gh-project-btn" : "populateForm",
    "submit form" : "addProject",
		"keydown #add-project-tags" : "submitTag",
    "click .tag-close" : "removeTag"
  },

	addTag: function(tag) {
    if (this.isValidTag(tag)) {
      tag = tag.toLowerCase();
      $('#project-tags').val(function(i, val) {
        return val + (val === '' ? tag : ',' + tag);
      });

      $('.project-tags').append(
        "<span data-tag='" + tag + "' class='tag'>" + tag
        + "<i data-tag='" + tag + "' class='fa fa-plus-circle tag-close'></span>");
    }
	},

  removeTag: function(e) {
    var tag = $(e.currentTarget).data('tag');
    var tags = $('#project-tags').val().split(",");
    $('#project-tags').val(_(tags).without(tag));
    this.$("span[data-tag='" + tag + "']").remove();
  },

	submitTag: function(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			var $tagField = $(e.currentTarget);
			if ($('.project-title').text() === '') {
				$tagField.val('');
				warn('You must load a project first!');
				return;
			}
			var input = $tagField.val();
			$tagField.val('');
			if (this.isValidTag(input)) {
				this.addTag(input);
			}
		} else {
			console.log('newp');
		}
	},

	isValidTag: function(string) {
		if (string.length > 15) {
      warn('Tag must be less than 15 characters!');
      return false;
    } else if ($('#project-tags').val().match(string.toLowerCase()) !== null) {
      warn('Tag already added');
      return false;
    } else {
      return true;
    }
	},

  addProject: function(event) {
    event.preventDefault();
    var $formErrorView = this.$('.form-errors');
    var projectParams = $(event.currentTarget).serializeJSON();
    ProjectBoard.Collections.projects.create(projectParams, {
      wait: true,
      success: function() {
				var newProjectName = arguments[0].get('name');
				$('form.new-form').trigger("reset");
				$('.project-title').empty();
				$('.project-tags').empty();
        Backbone.history.navigate('#', { trigger: true });
				notify(newProjectName + " added to Project Board");
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
    $('#project-tags').val('');
    $('.project-tags').text('');
    var gProjectId = $(event.currentTarget).data('id');
    var gProject = this.collection.find({ id: gProjectId });
 	 	$('#project-uid').val(gProjectId);
    $('.project-title').html(gProject.get('name'));
    $("#project-title").val(gProject.get('name'));
    this.addTag(gProject.get('language'));
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
		this.clearSubviews('.github-list');
    _.each(this.collection.models, function(project) {
			if (!view.projectListed(project)) {
	      var projectView =
	      	new ProjectBoard.Views.GithubListItem({ model: project });
	      view.addSubview('.github-list', projectView);
			}
    });

    this.renderSubviews();
  },

	projectListed: function(project) {
		return _.contains(ProjectBoard.Collections.projects.pluck('name'), project.get('name') );
	}
});
