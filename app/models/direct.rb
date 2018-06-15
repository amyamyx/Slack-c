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
  belongs_to :team
  
  has_many :messages, as: :messageable
  has_many :direct_memberships
  has_many :direct_members,
    through: :direct_memberships,
    source: :user

  def ensure_membership(user)
    DirectMembership.create(
      direct_id: self.id,
      user_id: user.id
    )
  end
end
