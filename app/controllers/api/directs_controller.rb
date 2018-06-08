class Api::DirectsController < ApplicationController
  def index
    @directs = current_user
                .directs
                .where(team_id: params[:team_id])
  end

  def create
    # team_id
    # @direct = Direct.new(team_id: params[:team_id])
  end

  def show
    @direct = Direct.find(params[:id])
  end

  def update
    # @direct = Direct.find(params[:id])
  end

  private

  def direct_params
  end
end
