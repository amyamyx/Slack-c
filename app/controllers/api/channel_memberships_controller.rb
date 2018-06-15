class Api::ChannelMembershipsController < ApplicationController
  # def index
  #   @channel_memberships = Channel.find(params[:channel_id].channel_memberships)
  # end

  def create
    # @channel_membership = ChannelMembership.new(
    #   channel_id: params[:channel_id],
    #   user_id: current_user.id
    # )

    @channel_membership = ChannelMembership.new(channel_mem_params)

    if @channel_membership.save
      # @channel = Channel.find(params[:channel_id])
      @channel = Channel.find(@channel_membership.channel_id)
      render 'api/channels/show'
    else
      render json: @channel_membership.errors.full_messages, status: 422
    end
  end

  private

  def channel_mem_params
    params.require(:channel_membership).permit(:channel_id, :user_id)
  end
end
