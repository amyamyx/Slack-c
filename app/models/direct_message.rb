# == Schema Information
#
# Table name: direct_messages
#
#  id         :bigint(8)        not null, primary key
#  content    :text             not null
#  user_id    :integer          not null
#  direct_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class DirectMessage < ApplicationRecord
  validates :content, presence: true

  belongs_to :user
  belongs_to :direct
end
