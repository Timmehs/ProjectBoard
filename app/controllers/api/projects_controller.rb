class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.includes(:author).all
  end


  def create
    @project = Project.new(project_params)
    if @project.save
      console.log('user_created')
    else
      raise Exception.new(@project.errors.full_messages)
    end
  end

  private
  def project_params
    params.require(:project).permit(:name, :uid, :owner_id, :html_url,
      :homepage, :description, :tags)
  end
end
