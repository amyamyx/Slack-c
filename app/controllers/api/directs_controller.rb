class Api::DirectsController < ApplicationController
  def index
    # in index view, iterate through the ids and render members names
    @direct_ids = current_user
                .direct_memberships
                .select(team_id)
                .where(team_id: params[:team_id], visible: true)
  end

  def create
    # team_id
    # @direct = Direct.new(team_id: params[:team_id])
    # ensure_membership
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
