class Api::ChannelMessagesController < ApplicationController
  def index
  end

  def create
    # channel_id, user_id
  end

  private

  def channel_messgae_params
    params.require(:channel_message).permit(:content)
  end
end
