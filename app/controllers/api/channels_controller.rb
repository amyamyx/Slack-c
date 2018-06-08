class Api::ChannelsController < ApplicationController
  def index
  end

  def create
    # creator_id, team_id
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :public, :purpose)
  end
end
