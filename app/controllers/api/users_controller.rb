class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:projects).find(params[:id])
  end

  def index
    @users = User.includes(:projects).all
  end
end
