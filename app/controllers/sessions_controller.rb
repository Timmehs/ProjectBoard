class SessionsController < ApplicationController

  # def create
  #   @user = User.find_by_credentials(params[:session]);
  #   if @user
  #     sign_in!(@user)
  #     puts "LOGGED IN! #{current_user.email}"
  #   else
  #     flash.now[:errors] = ["Invalid username or password"];
  #   end
  #
  #   redirect_to root_url
  # end

  def create
    auth = request.env["omniauth.auth"]
    user = User.find_by_provider_and_uid(auth["provider"], auth["uid"]) || User.create_with_omniauth(auth)
    sign_in!(user)
    redirect_to root_url, :notice => "Signed in!"
  end


  def destroy
    log_out!(current_user) if current_user
    redirect_to root_url
  end
end
