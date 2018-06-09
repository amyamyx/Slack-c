class Api::TeamsController < ApplicationController
  # before_action :set_current_user

  def index
    @teams = current_user.teams
  end
  
  def show
    @team = Team.find(params[:id])
  end

  def create
    @team = Team.new(team_params)
    
    if @team.save
      @channel = @team.channels.find_by_name("general")

      render 'api/channels/show'
    else
      render json: ["The name #{@team.name} has been taken."], status: 401
    end
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end
end
