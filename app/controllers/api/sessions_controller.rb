class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    if !logged_in?
      render json: ["User not found"], status: 404
    else
      logout
      render json: {}
    end
  end
end
