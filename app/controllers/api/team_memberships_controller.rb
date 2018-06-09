class Api::TeamMembershipsController < ApplicationController
  def index
    @team_memberships = Team.find(params[:team_id])
                            .team_memberships
  end

  def create
    @team_membership = TeamMembership.new(
      team_id: params[:team_id],
      user_id: current_user.id
    )

    if @team_membership.save
      @channel = Team.find(params[:id]).channels.find_by_name("general")
      render 'api/channels/show'
    else
      render json: @team_membership.errors.full_messages, status: 422
    end 
  end

  private

  def team_mem_params
  end
end
