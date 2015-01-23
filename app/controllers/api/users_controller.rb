class Api::UsersController < ApplicationController
  def show
    @user = User.includes(:projects).find(params[:id])
  end

  def index
    @users = User.includes(:projects).all
  end

  def update
    @user = User.find(params[:id])

  end

  def user_params
    params.require(:user).permit(:id, :username, :uid, :avatar, :email,
      :weekly_commits)

  end
end
#  id              :integer          not null, primary key
#  github_name     :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  session_token   :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#  uid             :string(255)
#  provider        :string(255)
#  username        :string(255)
#  avatar          :string(255)
