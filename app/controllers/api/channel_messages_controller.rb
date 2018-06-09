class Api::ChannelMessagesController < ApplicationController
  def index
    @messages = Channel.find(params[:channel_id]).messages
  end

  def create
    # channel_id, user_id
    @message = Message.new(channel_messgae_params)
    @meesgae.channel_id = params[:channel_id]
    @message.user = current_user

    if @message.save
      render :show
    else
      redner json: @message.errors.full_messages, status: 422
    end
  end

  private

  def channel_messgae_params
    params.require(:channel_message).permit(:content)
  end
end
