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
  
  has_many :direct_messages
  has_many :driect_memberships
  has_many :direct_members,
    through: :driect_memberships,
    source: :user
end
