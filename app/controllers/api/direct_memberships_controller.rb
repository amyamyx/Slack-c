class Api::DirectMembershipsController < ApplicationController
  def index
    # direct_ids = current_user.directs.where(team_id: params[:team_id]).pluck(:id)
    # all_memberships = current_user.direct_memberships
    # @direct_memberships = all_memberships.select{|el| direct_ids.include?(el.direct_id) }
    @direct_memberships = Direct.find(params[:direct_id]).direct_memberships
  end

  def create
    # user_id, direct_id
    @direct_membership = DirectMembership.new(direct_mem_params)
    @direct_membership.direct_id = params[:direct_id]

    if @direct_membership.save
      @direct = Direct.find(params[:direct_id])
      render 'api/directs/show'
    else
      render json: @direct_memberships.errors.full_messages, status: 422
    end
  end

  def update
    # update "visible" column
    direct_membership = DirectMembership.find(params[:id])
    if direct_membesrhip.update_attributes(direct_mem_params)
      @direct = Direct.find(direct_membership.direct_id)
      render 'api/directs/show'
    else
      render json: @direct_membership.errors.full_messages
    end
  end

  private

  def direct_mem_params
    params.require(:direct_membership).permit(:user_id, :visible)
  end
end
