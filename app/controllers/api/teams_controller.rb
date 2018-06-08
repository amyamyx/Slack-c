class Api::TeamsController < ApplicationController
  def index
    # user_id
    @teams = current_user.teams
  end
  
  def show
    @team = Team.find(params[:id])
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end
end
