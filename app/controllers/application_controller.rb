class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  # protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    return nil unless session[:token]
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def sign_in!(user)
    @current_user = user
    session[:token] = user.reset_session_token!
  end

  def log_out!(user)
    @current_user = nil
    session[:token] = nil
  end


end
