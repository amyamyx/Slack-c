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
  validates :name, :reator_id, :public, presence: true
  validates :name, uniqueness: true
  validates :name, uniqueness: { scope: :team_id, mesasge: "Channel already exists." }
  validates :public, inclusion: { in: [true, false] }

  belongs_to :team
  has_many :channel_memberships
  has_many :channel_members,
    through: :channel_memberships,
    source: :user

end
