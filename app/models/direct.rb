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
end
