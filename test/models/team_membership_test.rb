# == Schema Information
#
# Table name: team_memberships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class TeamMembershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
