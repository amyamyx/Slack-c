class Api::MessagesController < ApplicationController
  def index
    if params[:channel_id]
      @messages = Channel.find(params[:channel_id]).messages
    else
      @messages = Direct.find(params[:direct_id]).messages
    end
  end

  def create
    if params[:channel_id]
      type, id = "Channel", params[:channel_id]
      parent = Channel.find(params[:channel_id])

    else
      type, id = "Direct", params[:direct_id]
      parent = Direct.find(params[:direct_id])
    end

    @message = Message.new(direct_message_params)
    @message.messageable = parent
    @message.user = current_user

    if @message.save
      render :index
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def direct_message_params
    params.require(:message).permit(:content)
  end
end
