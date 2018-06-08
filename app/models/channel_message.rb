# == Schema Information
#
# Table name: channel_messages
#
#  id         :bigint(8)        not null, primary key
#  content    :text             not null
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMessage < ApplicationRecord
  validates :content, presence: true

  belongs_to :user
  belongs_to :channel
end
