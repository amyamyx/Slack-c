# == Schema Information
#
# Table name: direct_memberships
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  direct_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DirectMembership < ApplicationRecord
end
