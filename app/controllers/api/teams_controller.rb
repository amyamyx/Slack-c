class Api::TeamsController < ApplicationController
  def index
  end
  
  def show
  end

  private

  def team_params
    params.require(:team).permit(:name)
  end
end
