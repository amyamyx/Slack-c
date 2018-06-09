class Api::ChannelsController < ApplicationController
  def index
    @channels = Team.find(params[:team_id]).channels
  end

  def create
    # creator_id, team_id
    @channel = Channel.new(channel_params)
    @channel.team_id = params[:team_id]
    @channel.creator = current_user

    if @channel.save
      @channel.ensure_membership(current_user)
      render :show
    else
      render json: @channel.errors_full_messages, status: 422
    end
  end

  def show
    @channel = Channel.find(params[:id])
  end

  def update
    @channel = current_user.created_channels.find(params[:id])

    if @channel && @channel.update_attributes(channel_params)
      render :show
    else
      render json: @channel.errors_full_messgaes, status: 422
    end
  end

  def destroy
    @channel = current_user.created_channels.find(params[:id])
    
    if @channel
      @channel.destroy
      render 'api/teams/show'
    else
      render json: ["Channel not found"], status: 404
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :public, :purpose)
  end
end
