class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:session]);
    if @user
      sign_in!(@user)
      puts "LOGGED IN! #{current_user.email}"
    else
      flash.now[:errors] = ["Invalid username or password"];
    end

    redirect_to root_url
  end

  def destroy
    log_out!(current_user) if current_user
    redirect_to root_url
  end
end
