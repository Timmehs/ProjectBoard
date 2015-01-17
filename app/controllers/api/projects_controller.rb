class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render json: @projects
  end


  def create
    @project = Project.new(params[:project])
    if @project.save
      console.log('user_created')
    else
      flash[:errors] = @project.errors.full_messages
    end
  end

end
