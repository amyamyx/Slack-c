class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      @channel = Team.find(1).channels.find_by_name("general")
      ChannelMembership.create(user_id: @user.id, channel_id: @channel.id)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private 

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
