# == Schema Information
#
# Table name: channels
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  creator_id :integer          not null
#  team_id    :integer          not null
#  public     :boolean          default(TRUE), not null
#  purpose    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Channel < ApplicationRecord
end
