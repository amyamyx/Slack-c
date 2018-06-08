# == Schema Information
#
# Table name: direct_memberships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  direct_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  visible    :boolean          default(TRUE), not null
#

class DirectMembership < ApplicationRecord
  validates :visible, presence: true, inclusion: { in: [true, false] }
  
  belongs_to :user
  belongs_to :direct
end
