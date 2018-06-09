class Api::DirectMessagesController < ApplicationController
  def index
    @messages = Direct.find(params[:direct_id]).messages
    render 'api/messages/index'
  end

  def create
    # direct_id, user_id
    @message = Message.new(direct_message_params)
    @message.direct_id = params[:direct_id]
    @message.user = current_user

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  private

  def direct_message_params
    params.require(:direct_message).permit(:content)
  end
end
