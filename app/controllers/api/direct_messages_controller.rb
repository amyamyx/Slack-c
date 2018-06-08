class Api::DirectMessagesController < ApplicationController
  def index
  end

  def create
    # direct_id, user_id
  end

  private

  def direct_message_params
    params.require(:direct_message).permit(:content)
  end
end
