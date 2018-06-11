class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception
  
  helper_method :current_user, :logged_in?, :require_logged_in

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
    cookies.signed[:user_id] = user.id
  end

  def current_user
    @current_user = User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    cookies.delete(:user_id)
    session[:session_token] = nil
  end

  def require_logged_in
  end

  # !!Not thread-safe!!
  # add "before_action :set_current_user" in a controller
  # to allow corresponding model to have access to current_user 
  # def set_current_user
  #   User.current = current_user
  # end
end
