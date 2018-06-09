# == Schema Information
#
# Table name: directs
#
#  id         :bigint(8)        not null, primary key
#  team_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Direct < ApplicationRecord
  include Messageable
  belongs_to :team
  
  has_many :driect_memberships
  has_many :direct_members,
    through: :driect_memberships,
    source: :user

  def ensure_membership(user)
    DirectMembership.create(
      direct_id: self.id,
      user_id: user.id
    )
  end
end
