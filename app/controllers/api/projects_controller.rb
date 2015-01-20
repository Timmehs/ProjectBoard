class Api::ProjectsController < ApplicationController
  def index
    @projects = Project.includes(:author).all
  end


  def create
    @project = Project.new(project_params)
    if @project.save
      render json: @project
    else
      render json: { errors: @project.errors.full_messages }, status: 422
    end
  end

  private
  def project_params
    params.require(:project).permit(:name, :uid, :owner_id, :html_url,
      :homepage, :description, :tags)
  end
end
