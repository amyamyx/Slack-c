class Api::DirectsController < ApplicationController
  def index
    @directs = current_user.directs.where(team_id: params[:team_id])
  end
  
  

  def create
    @direct = Direct.new(team_id: params[:team_id])

    if @direct.save
      @direct.ensure_memberhip(current_user)
      render :show
    else
      render json: @direct.errors.full_messages
    end
  end

  def show
    @direct = Direct.find(params[:id])
  end

  private

  def direct_params
    params.require(:direct).permit()
  end
end
