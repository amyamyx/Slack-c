class Api::DirectMembershipsController < ApplicationController
  def index
    @direct_memberships = Direct.find(params[:direct_id])
                                .direct_memberships
  end

  def create
    # user_id, direct_id
  end

  private

  def direct_mem_params
  end
end
