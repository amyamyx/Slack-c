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

require 'test_helper'

class DirectMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
